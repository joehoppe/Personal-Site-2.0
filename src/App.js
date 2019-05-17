import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from './AboutMe/AboutMe';
import CardList from './CardList/CardList';
import Disclaimer from './Disclaimer/Disclaimer';
import NotFound from './NotFound/NotFound';
import TopNav from './TopNav/TopNav';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css'

const Index = () => <React.Fragment><h2>Some stuff I&lsquo;ve been working on</h2><CardList top={100} /></React.Fragment>;
const DisclaimerComponent = () => <React.Fragment><h2>Disclaimer</h2><Disclaimer /></React.Fragment>;
const AboutMeComponent = () => <React.Fragment><h2>About Me</h2><AboutMe /></React.Fragment>;
const NotFoundComponent = () => <React.Fragment><h2>Not Found</h2><NotFound /></React.Fragment>;

const AppRouter = () => (
  <Router>
    <div>
      <TopNav />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/aboutme/" component={AboutMeComponent} />
          <Route path="/disclaimer/" component={DisclaimerComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>

      <Footer />
    </div>
  </Router>
);

export default AppRouter;
