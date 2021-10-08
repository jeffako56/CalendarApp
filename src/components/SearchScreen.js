import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderTailwind from "./header";
import Search from "./search";
import store from "../store";

export default function SearchScreen() {
  const { dispatch } = store;
  const { events } = useSelector((state) => state.events);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = useCallback(async (isRefresh = false) => {
    dispatch({ type: "events/list" });
  });

  return (
    <div className="h-screen w-screen">
      <HeaderTailwind></HeaderTailwind>
      <Search details={events} />
    </div>
  );
}
