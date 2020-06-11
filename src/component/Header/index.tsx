import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Link to="/square">square</Link>
      <br />
      <Link to="/flex-box-normal">flex-box-normal</Link>
      <br />
      <Link to="/flex-box-justify-conetnt-center">
        flex-box-justify-conetnt-center
      </Link>
      <br />
      <Link to="/flex-box-justify-content-space-around">
        flex-box-justify-content-space-around
      </Link>
      <br />
      <Link to="/flex-box-justify-content-space-between">
        flex-box-justify-content-space-between
      </Link>
      <br />
      <Link to="/flex-box-justify-content-space-evenly">
        flex-box-justify-content-space-evenly
      </Link>
      <br />
      <Link to="/flex-box-align-items-center">flex-box-align-items-center</Link>
      <br />
      <Link to="/flex-box-align-content-center">
        flex-box-align-content-center
      </Link>
      <br />
      <Link to="/grid-layout-normal">grid-layout-normal</Link>
      <br />
      <Link to="/grid-layout-named">grid-layout-named test</Link>
      <br />
      <Link to="/grid-layout-fr">grid-layout-fr</Link>
      <br />
    </div>
  );
};

export default Header;
