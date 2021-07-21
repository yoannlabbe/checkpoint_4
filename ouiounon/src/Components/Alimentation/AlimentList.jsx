import React from "react";
import Aliment from "./Aliment";

const AlimentList = ({ aliments }) => {
  return (
    <div>
      {aliments.map((job, index) => (
        <Aliment {...job} key={index} style={{ marginTop: 15 }} />
      ))}
    </div>
  );
};

export default AlimentList;
