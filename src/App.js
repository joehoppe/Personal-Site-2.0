import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './AboutMe';
import CardList from './CardList/CardList';
import 'bootstrap/dist/css/bootstrap.css'

const Index = () => <h2>Some stuff I&lsquo;ve been working on</h2>;
const Disclaimer = () => <h2>Disclaimer</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Joseph Hoppe</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/AboutMe/">About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/disclaimer/">Disclaimer</Link>
          </li>
        </ul>
        </div>
      </nav>
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
