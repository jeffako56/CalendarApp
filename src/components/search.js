import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

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

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredEvents={filteredEvents} />
      </Scroll>
    );
  }

  return (
    <section className="mt-4 m-auto w-auto text-center ">
      <div>
        <h2 className="text-lg">Search your Events</h2>
      </div>
      <div className="p-2 ">
        <input
          className="p-3"
          type="search"
          placeholder="Search Events"
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
