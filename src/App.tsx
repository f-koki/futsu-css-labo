import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Square from "./component";
import Header from "./component/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/square" component={Square} />
    </Router>
  );
};

export default App;
