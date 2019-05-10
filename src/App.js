import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from './AboutMe/AboutMe';
import CardList from './CardList/CardList';
import Disclaimer from './Disclaimer/Disclaimer';
import NotFound from './NotFound/NotFound';
import TopNav from './TopNav/TopNav';
import Footer from './Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css'

const Index = () => <div><h2>Some stuff I&lsquo;ve been working on</h2><CardList top={100} /></div>;
const DisclaimerComponent = () => <div><h2>Disclaimer</h2><Disclaimer /></div>;
const AboutMeComponent = () => <h2>About Me<AboutMe /></h2>;
const NotFoundComponent = () => <div><h2>Not Found</h2><NotFound /></div>;

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
