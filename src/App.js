import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import logo from "./images/logo.png";
import axios from "axios";
import store from "./store";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/loading";
import ListTailwind from "./components/list";
import HeaderTailwind from "./components/header";
import ButtonAddTailwind from "./components/button";

function App() {
  const { dispatch } = store;
  const { events } = useSelector((state) => state.events);
  const [eventsList, setEventsList] = useState();
  const [isForm, setIsForm] = useState(false);
  const [isModal, setIsModal] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [isloading, setLoading] = useState(false);
  //   const [selected, setSelected] = useState();

  let hasError = false;
  console.log("wowowow", hasError);
  if (!hasError && !title) {
    hasError = true;
  }

  if ((!hasError && !date) || (!hasError && date.length > 10)) {
    hasError = true;
  }

  if ((!hasError && !status) || (!hasError && status === "Choose Status")) {
    hasError = true;
  }

  function showModal() {
    setIsForm(true);
  }

  const refreshList = useCallback(async (isRefresh = false) => {
    dispatch({ type: "events/list" });
  });

  function addDataHandler() {
    setIsForm(false);
    addData();
    refreshList();
    console.log([title, date, status]);
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = useCallback(async (isRefresh = false) => {
    dispatch({ type: "events/list" });
  });

  const addData = useCallback(async (isRefresh = false) => {
    try {
      setLoading(true);
      axios
        .post("http://localhost:8000/events", {
          title: title,
          status: status,
          date: date,
        })
        .then((res) => {
          setLoading(false);
          console.log(res.data);
        });
      refreshList();
    } catch (error) {
      console.log("nasend na may error");
      console.warn(error);
      //   setStatus("Completed");
    }
  });

  if (isloading) {
    return <Loading />;
  }

  return (
    <div className="container h-screen">
      <HeaderTailwind>CALENDAR APP</HeaderTailwind>
      {!isForm && (
        <ButtonAddTailwind
          onClick={showModal}
          isButton={true}
          title={"Add Event"}
        ></ButtonAddTailwind>
      )}

      {!isForm && <ListTailwind content={events} />}

      {!events.length && (
        <div className="pt-5 text-lg text-center">
          No Events Yet, Please Add Event
        </div>
      )}
      {isForm && (
        <div>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div> Add Events</div>
            <div className="flex truncate flex-col justify-center items-center px-4 py-3">
              <input
                id="title"
                type="text"
                className="form-input flex m-1 items-center justify-center w-3/4 border-blue-200 rounded"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                id="date"
                type="date"
                className="form-input m-1 truncate content-center border-blue-200  w-3/4 rounded"
                onChange={(e) => setDate(e.target.value)}
              />

              {date.length > 10 && date.length > 1 && (
                <text className="relative right-10 text-red-500 text-sm">
                  incorrect date format
                </text>
              )}

              <select
                className=" m-1 content-center truncate border-blue-200  w-3/4 rounded "
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Choose Status</option>
                <option>Pending</option>
                <option>Done</option>
              </select>
              {hasError && (
                <text className="relative right-10 text-red-500 text-sm">
                  Please Complete Details
                </text>
              )}
              <button
                disabled={hasError}
                id="ok-btn"
                className={
                  !hasError
                    ? "px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-grey-600 bg-grey-600) focus:outline-none focus:ring-2 focus:ring-blue-700"
                    : "px-4 py-2 mt-3 bg-gray-300 text-gray-400 text-base font-medium rounded-md w-full shadow-sm ) focus:outline-none  "
                }
                onClick={addDataHandler}
              >
                ADD
              </button>
              <button
                id="ok-btn"
                className="px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-grey-600 bg-grey-600) focus:outline-none focus:ring-2 focus:ring-blue-700"
                onClick={() => {
                  setIsForm(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
