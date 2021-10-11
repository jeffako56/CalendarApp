import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderTailwind from "./header";
import Search from "./search";
import store from "../store";
import FilterButton from "./filter";

export default function SearchScreen() {
  const { dispatch } = store;
  const { events, pendingList, doneList } = useSelector(
    (state) => state.events
  );
  const [filteredStatus, setFilteredStatus] = useState("All");

  const filteredData = useCallback(async () => {
    dispatch({ type: "events/searchStatus" });
  });

  useEffect(() => {
    filteredData();
    fetchAllData();
  }, []);

  const fetchAllData = useCallback(async (isRefresh = false) => {
    dispatch({ type: "events/list" });
  });

  return (
    <div className="h-screen w-screen">
      <HeaderTailwind></HeaderTailwind>
      <div className={"flex justify-end w-screen"}>
        <FilterButton setFilteredStatus={setFilteredStatus} />
      </div>
      {filteredStatus === "All" && <Search details={events} />}
      {filteredStatus === "Pending" && <Search details={pendingList} />}
      {filteredStatus === "Done" && <Search details={doneList} />}
    </div>
  );
}
