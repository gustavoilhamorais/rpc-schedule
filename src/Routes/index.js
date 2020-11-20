import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ErrorView from "../views/ErrorView";
import ScheduleGrid from "../views/ScheduleGrid";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ScheduleGrid} />
        <Route path="*" component={ErrorView} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;