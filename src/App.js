import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUS/AboutUs";
import OurTeams from "./components/OurTeams/OurTeams";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/team">
            <OurTeams />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/courses/:courseId">
            <Courses />
          </Route>

          <Route exact path="/about">
            <AboutUs />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
