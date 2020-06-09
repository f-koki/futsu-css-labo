import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Square from "./component/Square";
import Header from "./component/Header";
import FlexBox01 from "./container/FlexBox01";
import FlexBox02 from "./container/FlexBox02";
import FlexBox03 from "./container/FlexBox03";
import FlexBoxJustifyContentSpaceAround from "./container/FlexBoxJustifyContentSpaceAround";
import FlexBoxJustifyContentSpaceBetween from "./container/FlexBoxJustifyContentSpaceBetween";
import FlexBoxJustifyContentSpaceEvenly from "./container/FlexBoxJustifyContentSpaceEvenly";
import FlexBoxAlignContentCenter from "./container/FlexBoxAlignContentCenter";
// import FlexBox08 from "./container/FlexBox08";
// import FlexBox09 from "./container/FlexBox09";
// import FlexBox10 from "./container/FlexBox10";
// import FlexBox11 from "./container/FlexBox11";
// import FlexBox12 from "./container/FlexBox12";
// import FlexBox13 from "./container/FlexBox13";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route exact path="/flex-box-01" component={FlexBox01}></Route>
      <Route exact path="/flex-box-02" component={FlexBox02}></Route>
      <Route exact path="/flex-box-03" component={FlexBox03}></Route>
      <Route
        exact
        path="/flex-box-04"
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
        path="/flex-box-align-content-center"
        component={FlexBoxAlignContentCenter}
      ></Route>
      {/* <Route exact path="/flex-box-08" component={FlexBox08}></Route> */}
      {/* <Route exact path="/flex-box-09" component={FlexBox09}></Route> */}
      {/* <Route exact path="/flex-box-10" component={FlexBox10}></Route> */}
      {/* <Route exact path="/flex-box-11" component={FlexBox11}></Route> */}
      {/* <Route exact path="/flex-box-12" component={FlexBox12}></Route> */}
      {/* <Route exact path="/flex-box-13" component={FlexBox13}></Route> */}
      {/* <Route exact path="/flex-box-14" component={FlexBox14}></Route> */}
      {/* <Route exact path="/flex-box-15" component={FlexBox15}></Route> */}
      {/* <Route exact path="/flex-box-16" component={FlexBox16}></Route> */}
      {/* <Route exact path="/flex-box-17" component={FlexBox17}></Route> */}
      {/* <Route exact path="/flex-box-18" component={FlexBox18}></Route> */}
      <Route exact path="/square" component={Square} />
    </Router>
  );
};

export default App;
