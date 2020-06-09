import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Link to="/square">square</Link>
      <br />
      <Link to="/flex-box-01">flex-box-01 normal</Link>
      <br />
      <Link to="/flex-box-02">
        flex-box-02 justify-content(主軸) center 1行の中で中央揃え{" "}
      </Link>
      <br />
      <Link to="/flex-box-03">
        flex-box-03 align-items(クロス軸) center 1行の中でアイテムを整列する
      </Link>
      <br />
      <Link to="/flex-box-04">
        flex-box-04 justify-content(主軸) space-around
      </Link>
      <br />
      <Link to="/flex-box-05">
        flex-box-05 justify-content(主軸) space-between
      </Link>
      <br />
      <Link to="/flex-box-justify-content-space-evenly">
        flex-box-justify-content-space-evenly
      </Link>
      <br />
      <Link to="/flex-box-align-content-center">
        flex-box-align-content-center 複数行でクロス軸方向に中央揃え
      </Link>
      <br />
      <Link to="/flex-box-08">
        flex-box-08 justify-content(主軸) space-evenly
      </Link>
      <br />
      <Link to="/flex-box-09">
        flex-box-09 justify-content(主軸) space-evenly
      </Link>
      <br />
      <Link to="/flex-box-010">
        flex-box-010 justify-content(主軸) space-evenly
      </Link>
      <br />
    </div>
  );
};

export default Header;
