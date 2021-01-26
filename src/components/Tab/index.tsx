import classNames from "classnames";
import React from "react";
type Props = {
  icon: any;
  title: string;
  selected: boolean;
  onClick: () => void;
};

const Tab = (props: Props) => {
  const { icon, title, selected, onClick } = props;
  let btnClass = classNames({
    TabBar: true,
    selected: selected
  });

  return (
    <div className={btnClass} onClick={() => onClick()}>
      <img src={icon} alt="icon" />
      <span>{title}</span>
    </div>
  );
};

export default Tab;
