import React from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

type Props= {
  title: string;
  data: any[];
  axisDataKey: string;
  chartDataKey: string;
}

function CustomRadarChart(props: Props) {
  const { title, data, axisDataKey, chartDataKey } = props;
  return (
    <div className="RadarComponent">
      <p className="RdarTitle">{title}</p>
      <RadarChart outerRadius={50} width={250} height={180} data={data}>
        <PolarGrid />
        <PolarAngleAxis width={90} dataKey={axisDataKey} />
        <PolarRadiusAxis axisLine={false} tick={false} domain={[0, 75]} />
        <Radar dataKey={chartDataKey} stroke="#DE9637" fill="transparent" fillOpacity={1.5} />
      </RadarChart>
    </div>
  );
}
export default CustomRadarChart;
