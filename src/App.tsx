import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Square from "./component/Square";
import Header from "./component/Header";
import FlexBoxNormal from "./container/FlexBoxNormal";
import FlexBoxJustifyContentCenter from "./container/FlexBoxJustifyContentCenter";
import FlexBoxJustifyContentSpaceAround from "./container/FlexBoxJustifyContentSpaceAround";
import FlexBoxJustifyContentSpaceBetween from "./container/FlexBoxJustifyContentSpaceBetween";
import FlexBoxJustifyContentSpaceEvenly from "./container/FlexBoxJustifyContentSpaceEvenly";
import FlexBoxAlignItemsCenter from "./container/FlexBoxAlignItemsCenter";
import FlexBoxAlignContentCenter from "./container/FlexBoxAlignContentCenter";
import GridLayoutNormal from "./container/GridLayoutNormal";
import GridLayoutNamed from "./container/GridLayoutNamed";
import GridLayoutFr from "./container/GridLayoutFr";
import GridLayoutAutoFlow from "./container/GridLayoutAutoFlow";
import GridLayoutSpan from "./container/GridLayoutSpan";
import GridLayoutAutoFlowDense from "./container/GridLayoutAutoFlowDense";
import GridLayoutRepeat from "./container/GridLayoutRepeat";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/square" component={Square} />
      <Route exact path="/flex-box-normal" component={FlexBoxNormal}></Route>
      <Route
        exact
        path="/flex-box-justify-conetnt-center"
        component={FlexBoxJustifyContentCenter}
      ></Route>
      <Route
        exact
        path="/flex-box-justify-content-space-around"
        component={FlexBoxJustifyContentSpaceAround}
      ></Route>
      <Route
        exact
        path="/flex-box-justify-content-space-between"
        component={FlexBoxJustifyContentSpaceBetween}
      ></Route>
      <Route
        exact
        path="/flex-box-justify-content-space-evenly"
        component={FlexBoxJustifyContentSpaceEvenly}
      ></Route>
      <Route
        exact
        path="/flex-box-align-items-center"
        component={FlexBoxAlignItemsCenter}
      ></Route>
      <Route
        exact
        path="/flex-box-align-content-center"
        component={FlexBoxAlignContentCenter}
      ></Route>
      <Route
        exact
        path="/grid-layout-normal"
        component={GridLayoutNormal}
      ></Route>
      <Route
        exact
        path="/grid-layout-named"
        component={GridLayoutNamed}
      ></Route>
      <Route exact path="/grid-layout-fr" component={GridLayoutFr}></Route>
      <Route
        exact
        path="/grid-layout-auto-flow"
        component={GridLayoutAutoFlow}
      ></Route>
      <Route exact path="/grid-layout-span" component={GridLayoutSpan}></Route>
      <Route
        exact
        path="/grid-layout-auto-flow-dense"
        component={GridLayoutAutoFlowDense}
      ></Route>
      <Route
        exact
        path="/grid-layout-repeat"
        component={GridLayoutRepeat}
      ></Route>
    </Router>
  );
};

export default App;
