import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import "./Pie.css";



export default function Pie() {
  return (
    <div className="Pie">
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10,},
            { id: 1, value: 15, },
            { id: 2, value: 20,  },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </div>
  );
}

