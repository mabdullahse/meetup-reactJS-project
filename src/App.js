import React from "react";
import { Route, Switch } from "react-router";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetup"; 
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetups />
        </Route>

        <Route path="/new-meetups">
          {" "}
          <NewMeetups />{" "}
        </Route>
        <Route path="/favorites">
          {" "}
          <Favorites />{" "}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
