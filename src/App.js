import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './AboutMe';
import CardList from './CardList/CardList';

const Index = () => <h2>Home</h2>;
const Disclaimer = () => <h2>Disclaimer</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutMe/">About Me</Link>
          </li>
          <li>
            <Link to="/disclaimer/">Disclaimer</Link>
          </li>
        </ul>
      </nav>

      <h1>Joseph Hoppe</h1>

      <Route path="/" exact component={Index} />
      <Route path="/aboutme/" component={AboutMe} />
      <Route path="/disclaimer/" component={Disclaimer} />
    
      <CardList top={100} />
    </div>
  </Router>
);

export default AppRouter;
