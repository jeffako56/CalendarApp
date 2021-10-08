import React, { useEffect, useState, useCallback } from "react";
import { render } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import store from "../store";
import Loading from "./loading";
export default function ListTailwind({ content }) {
  const { dispatch } = store;

  const [selected, setSelected] = useState();
  const [isloading, setLoading] = useState(false);
  const [isModal, setMIsModal] = useState();
  const [mid, setMID] = useState();
  const [mtitle, setMTitle] = useState();
  const [mdate, setMDate] = useState();
  const [mstatus, setMStatus] = useState();

  let hasError = false;
  if (!hasError && !mtitle) {
    hasError = true;
  }

  if ((!hasError && !mdate) || (!hasError && mdate.length > 10)) {
    hasError = true;
  }

  if (
    (!hasError && !mstatus) ||
    (!hasError && mstatus === "Choose Status") ||
    (!hasError && mstatus.length === 0)
  ) {
    hasError = true;
  }

  const selectHandler = useCallback(async (params) => {
    dispatch({ type: "events/setSelected", payload: params });
    console.log("meron ba", params);
    setSelected(params);
  });
  const refreshList = useCallback(async (isRefresh = false) => {
    dispatch({ type: "events/list" });
  });

  const dateStr = "2021-23-2";
  const [year, month, day] = dateStr.split("-");
  let newDate = `${year}-${month}-${day}`;
  const UpdateDataHandler = useCallback(async (isRefresh = false) => {
    try {
      setLoading(true);
      axios
        .put("http://localhost:8000/events/" + mid + "/", {
          title: mtitle,
          status: mstatus,
          date: mdate,
        })
        .then((res) => {
          setLoading(false);
          refreshList();
          console.log(res.data);
        });
      setMIsModal(false);
      refreshList();
    } catch (error) {
      console.log("nasend na may error");
      console.warn(error);
    }
  });

  const DeleteDataHandler = useCallback(async (isRefresh = false) => {
    try {
      setLoading(true);
      axios
        .delete("http://localhost:8000/events/" + mid + "/", {
          title: mtitle,
          status: mstatus,
          date: mdate,
        })
        .then((res) => {
          setLoading(false);
          refreshList();
          console.log(res.data);
        });
      setMIsModal(false);
    } catch (error) {
      console.log("nasend na may error");
      console.warn(error);
    }
  });

  if (isloading) {
    return <Loading />;
  }

  return (
    <div>
      {!isModal && (
        <ul className="lg:mt-20 lg:pb-10 ">
          {content.map((item, i) => (
            <>
              <div
                className="lg:flex sm:mt-4 sm:m-10 sm:w-full lg:justify-self-auto lg:m-auto mt-4  lg:w-1/2"
                onClick={() => {
                  selectHandler(item);
                  console.log(selected);
                  setMIsModal(true);
                  setMID(item.id);
                  setMTitle(item.title);
                  setMDate(item.date);
                  setMStatus(item.status);
                }}
              >
                <div className="flex cursor-pointer lg:m-2 lg:mx-auto sm:flex-col-reverse sm:justify-center lg:flex-row lg:w-full lg:items-start lg:items-center rounded lg:bg-white    shadow hover:shadow-xl z-10 sm:h-20 sm:bg-gray-200">
                  <div className="flex flex-col justify-around w-full lg:w-1/3 lg:h-5 sm:h-20 dark:border-gray-700 lg:h-20 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 sm:bg-white lg:bg-blue-50 hover:shadow">
                    <div className="lg:text-center lg:pt-3 h-1/2  lg:p-2 sm:text-center sm:h-4">
                      {item.date}
                    </div>
                    <div className=" text-center text-red-500  lg:p-2">
                      {item.status}
                    </div>
                  </div>
                  <text className="p-2 truncate  lg:text-lg text-center bottom-10 justify-center w-full lg:w-2/3 h-10 dark:bg-gray-1000 lg:bg-white sm:bg-blue-50 font-semibold ">
                    {item.title}
                  </text>
                </div>
              </div>
            </>
          ))}
        </ul>
      )}
      {isModal && (
        <div>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div> Update Events</div>
            <div className="flex truncate flex-col justify-center items-center px-4 py-3">
              <input
                value={mtitle || ""}
                id="title"
                type="text"
                className="form-input flex m-1 items-center justify-center w-3/4 border-blue-200 rounded"
                placeholder="Title"
                onChange={(e) => setMTitle(e.target.value)}
              />
              <input
                defaultValue={newDate}
                value={mdate || ""}
                id="date"
                type="date"
                className="form-input m-1 truncate content-center border-blue-200  w-3/4 rounded"
                onChange={(e) => setMDate(e.target.value)}
              />

              {mdate.length > 10 && mdate.length > 1 && (
                <text className="relative right-10 text-red-500 text-sm">
                  incorrect date format
                </text>
              )}
              <select
                value={mstatus}
                className=" m-1 content-center truncate border-blue-200  w-3/4 rounded "
                onChange={(e) => setMStatus(e.target.value)}
              >
                <option>Choose Status</option>
                <option>Pending</option>
                <option>Done</option>
              </select>

              <button
                disabled={hasError}
                id="ok-btn"
                className={
                  !hasError
                    ? "px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-grey-600 bg-grey-600) focus:outline-none focus:ring-2 focus:ring-blue-700"
                    : "px-4 py-2 mt-3 bg-gray-300 text-gray-400 text-base font-medium rounded-md w-full shadow-sm ) focus:outline-none  "
                }
                onClick={UpdateDataHandler}
              >
                Update
              </button>
              <button
                id="ok-btn"
                className="px-4 py-2 mt-3 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-grey-600 bg-grey-600) focus:outline-none focus:ring-2 focus:ring-blue-700"
                onClick={() => {
                  setMIsModal(false);
                }}
              >
                Cancel
              </button>
              <button
                id="ok-btn"
                className="px-4 py-2 mt-3 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-grey-600 bg-grey-600) focus:outline-none focus:ring-2 focus:ring-red-700"
                onClick={() => {
                  DeleteDataHandler();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
