import React from "react";
import { WorkList } from "../../constants/work-list";
import work_back from "../../images/work_back.png";
import work_process from "../../images/work_process.png";
import "../Match/index.scss";

const Export = () => {
  function sendEmail() {
    window.open(
      "mailto:hello@thesourcingmachine.com?subject=I'm%20interested%20in%20the%20Export%20functionality&body=Hello%2C%0D%0A%0D%0ALet%20me%20know%20when%20this%20functionality%20is%20available.%0D%0A%0D%0ADo%20you%20have%20anything%20you%20want%20us%20to%20add%20%3F%0D%0A%0D%0AKind%20regards."
    );
  }

  return (
    <div className="WorkSpace">
      <div className="TabSpace">
        <div className="arrow">
          <img src={work_back} alt="back" />
          <span>{WorkList.arrow}</span>
        </div>
        <div className="progress">
          <img src={work_process} alt="progress" />
          <p>{WorkList.progress}</p>
        </div>
        <div className="block"></div>
      </div>
      <div className="description">
        <p>{WorkList.screen_1}</p>
        <p>{WorkList.screen_2}</p>
      </div>
      <div className="access" onClick={() => sendEmail()}>
        <p>{WorkList.access_1}</p>
        <p>{WorkList.access_2}</p>
      </div>
    </div>
  );
};

export default Export;
