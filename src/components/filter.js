import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function FilterButton(params) {
  const [isShowChoices, setisShowChoices] = useState(false);

  const handleChange = () => {
    setisShowChoices(!isShowChoices);
    console.log("change");
  };

  return (
    <div>
      <button className={" mr-2 p-2 "} onClick={handleChange}>
        <FilterAltIcon fontSize="medium" className={"text-blue-400"} />
      </button>
      {isShowChoices && (
        <div
          className={
            "flex flex-col justify-center content-center absolute right-12 bg-white float-left border-1 shadow"
          }
        >
          <button
            onClick={() => {
              params.setFilteredStatus("All");
              handleChange();
            }}
            className={"text-left py-1 px-4"}
          >
            All
          </button>
          <button
            onClick={() => {
              params.setFilteredStatus("Pending");
              handleChange();
            }}
            className={"text-left py-1 px-4"}
          >
            Pending
          </button>
          <button
            onClick={() => {
              params.setFilteredStatus("Done");
              handleChange();
            }}
            className={"text-left py-1 px-4"}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
