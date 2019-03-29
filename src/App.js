import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './AboutMe';
import CardList from './CardList/CardList';
import TopNav from './TopNav/TopNav.js';
import 'bootstrap/dist/css/bootstrap.css'

const Index = () => <h2>Some stuff I&lsquo;ve been working on</h2>;
const Disclaimer = () => <h2>Disclaimer</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <TopNav />

      <div className="container">
        <Route path="/" exact component={Index} />
        <Route path="/aboutme/" component={AboutMe} />
        <Route path="/disclaimer/" component={Disclaimer} />
      </div>

      <CardList top={100} />
    </div>
  </Router>
);

export default AppRouter;
