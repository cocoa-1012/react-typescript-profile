import React from "react";
import { TabsList } from "../../constants/tabs-list";
import Tab from "../Tab";
import "./index.scss";

type Props = {
  onChange: (index: number) => void;
  selectedTab: number;
};

const Tabs = (props: Props) => {
  const { onChange, selectedTab } = props;

  return (
    <div className="TopBarTotal">
      {TabsList.map((item, index) => (
        <Tab
          key={index}
          selected={selectedTab === index}
          icon={selectedTab === index ? item.active_photo : item.photo}
          title={item.text}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
};

export default Tabs;
