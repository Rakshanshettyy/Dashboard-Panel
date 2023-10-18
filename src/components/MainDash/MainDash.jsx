import React from "react";
import Cards from "../Cards/Cards";
import Pie from "../Pie/Pie";
import Bars from "../Bar/bar";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="admin-name">Rakshan Shetty</h1>
      <Cards  />
      <div className="MidItems"> 
      <Pie />
      <Bars />
</div>
           <Table />
    </div>
  );
};

export default MainDash;
