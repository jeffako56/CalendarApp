import React from "react";
import Card from "./Card";

function SearchList({ filteredEvents }) {
  const filtered = filteredEvents.map((item) => (
    <Card key={item.id} item={item} />
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
