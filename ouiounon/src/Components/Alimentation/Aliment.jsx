import React from "react";

const Aliment = ({ name, autorisation, description }) => {
  return (
    <div style={{ borderTop: "1px solid lightgrey" }}>
      <h3>{name}</h3>
      <p style={{ fontStyle: "italic" }}>
        {autorisation}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Aliment;
