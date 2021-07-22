import { TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useHistory } from "react-router";

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const router = useHistory();

  React.useEffect(() => {
    let active = true;
    console.log("ça marche?");

    (async () => {
      const response = await axios.get(
        "http://localhost:3031/alimentation?keyword=" + keyword
      );

      const aliments = response.data;
      console.log(aliments);
      if (active) {
        setOptions(aliments);
      }
    })();

    return () => {
      active = false;
    };
  }, [keyword]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Autocomplete
        style={{ width: 200 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => `${option.name}`}
        options={options}
        onChange={(event, newValue) => {
          if (newValue && newValue._id) {
            router.push(`/alimentation/${newValue._id}`);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Rechercher..."
            onChange={(e) => setKeyword(e.target.value)}
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </div>
  );
}
