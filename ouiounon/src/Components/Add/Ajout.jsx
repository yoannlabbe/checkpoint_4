import { Card } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import Input from "./Input";

export default function Ajout() {
  const [form, setForm] = useState({
    name: "",
    autorisation: "",
    description: "",
  });

  const handleClick = async () => {
    await axios
      .post("http://localhost:3031/alimentation", form)
      .then((response) => {
        setForm(response.data);
        console.log("ok");
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          heigh: "600px",
          width: "500px",
        }}
      >
        Nom du nouveau aliment:
        <Input
          onChange={handleChange}
          value={form.name}
          name={"name"}
          placeholder="Nom du nouveau aliment"
        />
        Oui ou Non:
        <Input
          onChange={handleChange}
          value={form.autorisation}
          name={"autorisation"}
          placeholder="Oui ou Non"
        />
        Description:
        <Input
          onChange={handleChange}
          value={form.description}
          name={"description"}
          placeholder="Description"
        />
        <button onClick={handleClick}>Valider</button>
      </Card>
    </div>
  );
}
