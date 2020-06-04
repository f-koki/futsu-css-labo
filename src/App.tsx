import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Square from "./component/Square";
import Header from "./component/Header";
import FlexBoxOne from "./container/FlexBoxOne";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/flex-box-1" component={FlexBoxOne}></Route>
      <Route exact path="/square" component={Square} />
    </Router>
  );
};

export default App;
