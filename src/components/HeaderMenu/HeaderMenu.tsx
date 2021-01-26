import React from "react";
import "./HeaderMenu.scss";

type Props = {
  showHome: (index: number) => void;
};

const HeaderMenu = (props: Props) => {
  const { showHome } = props;
  var url = "#";

  return (
    <div className="HeaderBar">
      <a href={url} className="HeaderBarLeft" onClick={() => showHome(0)}>
        <span>TheSourcingMachine</span>
        <span className="HeaderAbc">.com</span>
      </a>
      <div className="HeaderBarRight">
        <span onClick={() => showHome(3)}>Export</span>
        <span className="HeaderBarRightEnd">About</span>
        <span className="HeaderBarRightEnd">Logout</span>
      </div>
    </div>
  );
};

export default HeaderMenu;
