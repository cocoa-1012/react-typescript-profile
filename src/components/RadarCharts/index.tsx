import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React, { Fragment } from "react";
import Icon from "react-fa";
import { ParsedResume } from "../../models/parsed-resume";
import CustomRadarChart from "../CustomRadarChart";

const RadarCharts = (input: ParsedResume) => {
  function drawSkills() {
    var fragments = [];
    for (let index = 0; index < input.skillsByCategory.length; index = index + 2) {
      fragments.push(<Fragment key={index}>{getRadarChart(index)}</Fragment>);
    }

    return fragments;
  }

  function getRadarChart(index: number) {
    if (index + 1 < input.skillsByCategory.length) {
      return (
        <>
          <CustomRadarChart
            key={input.skillsByCategory[index].category}
            title={input.skillsByCategory[index].category}
            axisDataKey="name"
            chartDataKey="duration"
            data={input.skillsByCategory[index].skills}
          />
          <CustomRadarChart
            key={input.skillsByCategory[index + 1].category}
            title={input.skillsByCategory[index + 1].category}
            axisDataKey="name"
            chartDataKey="duration"
            data={input.skillsByCategory[index + 1].skills}
          />
        </>
      );
    } else {
      return (
        <CustomRadarChart
          key={input.skillsByCategory[index].category}
          title={input.skillsByCategory[index].category}
          axisDataKey="name"
          chartDataKey="duration"
          data={input.skillsByCategory[index].skills}
        />
      );
    }
  }

  return (
    <div className="CarouselContainer">
      <Carousel
        slidesPerPage={1}
        dots
        keepDirectionWhenDragging
        addArrowClickHandler
        infinite
        arrowLeft={
          <div className="CarouselLeftIcon">
            <Icon name="angle-left" />
          </div>
        }
        arrowRight={
          <div className="CarouselRightIcon">
            <Icon name="angle-right" />
          </div>
        }>
        {drawSkills()}
      </Carousel>
    </div>
  );
};
export default RadarCharts;
