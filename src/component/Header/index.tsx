import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Link to="/square">square</Link>
      <br />
      <Link to="/flex-box-01">flex-box-01</Link>
      <br />
      <Link to="/flex-box-02">flex-box-02</Link>
      <br />
      <Link to="/flex-box-03">flex-box-03</Link>
      <br />
      <Link to="/flex-box-04">flex-box-04 space-around</Link>
      <br />
      <Link to="/flex-box-05">flex-box-05 space-between</Link>
      <br />
      <Link to="/flex-box-06">flex-box-06 space-evenly</Link>
      <br />
    </div>
  );
};

export default Header;
