import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Link to="/square">square</Link>
      <br />
      <Link to="/flex-box-1">flex-box-one</Link>
      <br />
    </div>
  );
};

export default Header;
