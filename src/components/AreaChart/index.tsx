import React from "react";
import { Area, AreaChart, LabelList, XAxis } from "recharts";
import { LinkedInInfo } from "../../models/linkedin-info";
import "./area-chart.scss";

const CustomAreaChart = (linkedinInfo: LinkedInInfo) => {
  const salary = Math.floor(linkedinInfo.parsedResume.salary);
  const salaryPerDay = Math.floor(salary / 100);

  const minSalary = salary - 10000;
  const minSalaryPerDay = Math.floor(minSalary / 100);

  const maxSalary = salary + 15000;
  const maxSalaryPerDay = Math.floor(maxSalary / 100);

  const data = [
    {
      name: "",
      Total: 0,
      pv: 0,
      Day: 0
    },
    {
      name: "25%",
      Total: minSalary,
      pv: 1,
      Day: minSalaryPerDay
    },
    {
      name: "50%",
      Total: salary,
      pv: 3,
      Day: salaryPerDay
    },
    {
      name: "75%",
      Total: maxSalary,
      pv: 1,
      Day: maxSalaryPerDay
    },
    {
      name: "",
      Total: 0,
      pv: 0,
      Day: 0
    }
  ];

  return (
    <div className="AreaCharBorder">
      <AreaChart width={255} height={120} data={data} margin={{ top: 40, right: 20, left: 20, bottom: 10 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0">
            <stop offset="50%" stopColor="#365075" stopOpacity={1} />
            <stop offset="50%" stopColor="#ff5172" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)">
          <LabelList
            className="TotalPrice"
            dataKey="Total"
            offset={22}
            position="top"
            content={props => (props.value ? `${props.value} €` : null)}
          />
          <LabelList
            className="DayPrice"
            dataKey="Day"
            offset={13}
            position="top"
            content={props => (props.value ? `${+props.value}€/day` : null)}
          />
        </Area>
      </AreaChart>
    </div>
  );
};

export default CustomAreaChart;
