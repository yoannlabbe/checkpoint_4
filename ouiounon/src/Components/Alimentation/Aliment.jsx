import { Card } from "@material-ui/core";
import axios from "axios";

import React, { useEffect, useState } from "react";

const Aliment = () => {
  const [list, setList] = useState([]);

  // const [aliment, setAliment] = useState({
  //   name:"",
  //   autorisation:"",
  //   description:"",
  // });

  useEffect(() => {
    axios
      .get("http://localhost:3031/alimentation")
      .then((response) => response.data)
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      {list.map((row) => (
        <Card>
          <div
            style={{
              borderTop: "1px solid lightgrey",
              height: "150px",
              width: "150px",
            }}
          >
            <h3 style={{ color: "blue" }} >{row.name}</h3>
            <p style={{ fontStyle: "italic" }} >{row.autorisation}</p>
            <p >{row.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Aliment;
