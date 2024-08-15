import React from 'react'
import { useState } from 'react'
import Chart from "react-apexcharts";
const Charts = () => {

    let [daily,setdaily]=useState(
        [
            
            {
              name: "In process",
              data: [1, 3,4, 3, 7, 2, 9],
            },
            {
              name: "Completed",
              data:  [2, 3,1, 6, 1, 7, 5],
            },
          ]
    )
    let [project,setproject]=useState(
        [
            {
              name: "Eggs",
              data: [3, 6, 5, 2, 8, 3, 9],
            },
           
          ]
    )
    let [weekly,setweekly]= useState(
        {
            title: { text: "Daily Tasks Overviews" },
            xaxis: {
              title: { text: "Daily Overview" },
              categories: ["mon", "tue", "wed", "thr", "fri", "sat","sun"],
            },
          }
    )
    let [ProjectOverview,setoverview]= useState(
        {
            title: { text: "Project Tasks Overviews" },
            xaxis: {
              title: { text: "Avg Project daily" },
            //   categories: ["mon", "tue", "wed", "thru", "fri", "sat","sun",],
            },
          }
    )
  return (
    <>
     <div className="grid lg:grid-cols-2">
        <div className="mt-5">
          <Chart
          height={300}
            type="line"
            
            series={daily}
            options={weekly}
          ></Chart>
        </div>
        <div className="mb-16">
        <Chart
            type="bar"
            height={300}
            series={project}
            options={ProjectOverview}
          ></Chart>
        </div>
      </div>
    </>
  )
}

export default Charts;