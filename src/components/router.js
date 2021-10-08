import React from "react";
import HeaderTailwind from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
import ListTailwind from "./list";
import Search from "./search";
import initialDetails from "../data/initialDetails";
import SearchScreen from "./SearchScreen";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

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
        <h3 className={"font-extrabold font-sans text-5xl mx-auto p-4 w-full"}>
          Welcome to CALENDAR APPLICATION
        </h3>
        <p className="p-4 px-8">
          What are you waiting for? Schedule your upcoming events.
        </p>
        <Link className={"absolute right-20 text-lg font-bold"} to="/events">
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
