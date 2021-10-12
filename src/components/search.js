import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useState from "react-usestateref";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import axios from "axios";
import store from "../store";
import Button from "@mui/material/Button";
import { Icon, IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";

function Search({ details }) {
  const { dispatch } = store;
  const [searchField, setSearchField] = useState("");
  const [filteredPending, setFilteredPending] = useState();
  const [filteredDone, setFilteredDone] = useState();
  const { pendingList, doneList } = useSelector((state) => state.events);
  const [isStatus, setIsStatus] = useState(false);
  const [status, setstatus, ref] = useState("Default");

  const filteredEvents = details.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchField.toLowerCase()) ||
      item.status.toLowerCase().includes(searchField.toLowerCase()) ||
      item.date.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredData = useCallback(async () => {
    dispatch({ type: "events/searchStatus" });
    console.log("donelist", doneList);
  });

  useEffect(() => {
    filteredData();
  }, []);

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredEvents={filteredEvents} />
      </Scroll>
    );
  }

  return (
    <section className=" mt-4 m-auto w-auto text-center">
      <div className={"flex"}>
        <div className="relative p-2 mx-auto ">
          <SearchIcon fontSize="medium" />
          <input
            className="p-3"
            type="search"
            placeholder="Search Events"
            onChange={handleChange}
          />
        </div>
      </div>
      {ref.current === "Default" && searchList()}
    </section>
  );
}

export default Search;
