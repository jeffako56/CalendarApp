import React from "react";

function Card({ item }) {
  return (
    <div className="flex lg:mx-auto lg:w-1/2  sm:flex-col-reverse sm:justify-center lg:flex-row w-4/5 md2:mx-auto sm:mx-auto my-5 lg:items-start lg:items-center rounded lg:bg-white    shadow hover:shadow-xl z-10 sm:h-20 sm:bg-gray-200">
      <div className="flex flex-col justify-around w-full lg:w-1/3 lg:h-5 sm:h-20 dark:border-gray-700 lg:h-20 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 sm:bg-white lg:bg-blue-50 hover:shadow">
        <div className="lg:text-center lg:pt-3 h-1/2  lg:p-2 sm:text-center sm:h-4">
          {item.date}
        </div>
        <div className=" text-center text-red-500  lg:p-2">{item.status}</div>
      </div>
      <text className="p-2 truncate  lg:text-lg text-center bottom-10 justify-center w-full lg:w-2/3 h-10 dark:bg-gray-1000 lg:bg-white sm:bg-blue-50 font-semibold ">
        {item.title}
      </text>
    </div>
  );
}

export default Card;
