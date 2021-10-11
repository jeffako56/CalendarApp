/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
export const events = {
  state: {
    events: [],
    selected: [],
    pendingList: [],
    doneList: [],

    refreshing: false,
    isBusy: true,
  },
  reducers: {
    updateState(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    async list({ refresh, ...payload } = {}) {
      try {
        this.updateState({
          refreshing: refresh,
          isBusy: true,
        });

        const result = await axios.get("http://localhost:8000/events");

        this.updateState({
          events: result.data,
          isBusy: false,
          refreshing: false,
        });
        console.log("res", result.data);
      } catch (err) {
        this.updateState({
          errorMessage: err.message,
          isBusy: false,
          refreshing: false,
        });
      }
    },

    async searchStatus({ refresh, ...payload } = {}) {
      try {
        this.updateState({
          refreshing: refresh,
          isBusy: true,
        });
        const result = await axios
          .get("http://localhost:8000/events?status=Pending")
          .then((result) => {
            this.updateState({
              pendingList: result.data,
              isBusy: false,
              refreshing: false,
            });
          });

        const resultdone = await axios
          .get("http://localhost:8000/events?status=Done")
          .then((resultdone) => {
            this.updateState({
              doneList: resultdone.data,
              isBusy: false,
              refreshing: false,
            });
          });

        // refreshList();
      } catch (error) {
        console.log("error ano", error);
        console.warn(error);
      }
    },

    setEvents({ events = [] }) {
      console.log("check check");
      this.updateState({
        events,
      });
      console.log("events na natapos", events);
    },

    setSelected({ selected = [] }) {
      this.updateState({
        selected,
      });
      console.log("select na natapos", selected);
    },
  }),
};
