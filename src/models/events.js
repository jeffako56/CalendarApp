/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
export const events = {
  state: {
    events: [],
    selected: [],

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
      //   try {
      //     // await verifyServices.sendEmailID( { email: email } );
      //     axios.get("http://localhost:8000/events").then((response) => {
      //       console.log(response.data);
      //       // setEventsList(response.data);
      //       this.updateState({ payload });
      //     });
      //   } catch (error) {
      //     console.log("nasend na may error");
      //     console.warn(error);
      //     //   setStatus("Completed");
      //   }
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
