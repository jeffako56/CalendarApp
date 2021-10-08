import React from "react";
import HeaderTailwind from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
import ListTailwind from "./list";
import Search from "./search";
import SearchScreen from "./SearchScreen";

export default function RouteNav() {
  return (
    <div className="h-screen w-screen ">
      <Link className={"font-semibold px-3 py-1  hover:bg-blue-100 "} to="/">
        Home
      </Link>
      <Link
        className={"font-semibold px-3 py-1 hover:bg-blue-100"}
        to="/events"
      >
        Events
      </Link>
      <Link
        className={"font-semibold px-3 py-1 hover:bg-blue-100"}
        to="/search"
      >
        Search
      </Link>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/events" component={App}></Route>
        <Route path="/search" component={SearchScreen} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  );
}
function Home() {
  return (
    <div className="h-screen w-screen">
      <HeaderTailwind>CALENDAR APP</HeaderTailwind>
      <div>
        <h3
          className={
            "font-extrabold font-sans text-center text-5xl mx-auto p-4 w-full"
          }
        >
          Welcome to CALENDAR APPLICATION
        </h3>
        <p className="p-4 px-8 text-center">
          What are you waiting for? Schedule your upcoming events.
        </p>
        <Link
          className={"absolute mt-10 right-20 text-lg font-bold"}
          to="/events"
        >
          <div>Continue &gt;</div>
        </Link>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="h-screen w-screen">
      <h2>Error 404</h2>
    </div>
  );
}
