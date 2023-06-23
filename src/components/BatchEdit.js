import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import dataContext from "../context/Create";
import axios from "axios";
import { NavLink } from "react-router-dom";

function BatchEdit(ind) {
  let tada = useContext(dataContext);
  let [mail, setMail] = useState("");
  let [data, setData] = useState([]);
  let [test, setTest] = useState(true);

  const handleChange = (e) => {
    setMail(e.target.value);
    setTest(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail));
  };
  const submit = async (e) => {
    e.preventDefault();
    if (data != []) {
      let arr = {
        id: tada.idd[0],
        mails: data,
      };
      setData([]);
      tada.idd.pop(tada.idd[0]);
      await axios
        .put("https://bulk-mail-server.onrender.com/edit", arr)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };

  const addmail = () => {
    if (test) {
      data.push(mail);
      setMail("");
      test = true;
    }
  };
  return (
    <div className="editmail">
      <h4>Add Minimum 2 mails for bulkmails</h4>
      <TextField
        id="standard-basic"
        onChange={(e) => handleChange(e)}
        label={test ? "Email here" : "Error"}
        variant="standard"
        value={mail}
        error={!test ? true : false}
        helperText={test ? "" : "Invalid Mail."}
      />
      <Button
        variant="outlined"
        style={{ marginTop: "10px" }}
        onClick={addmail}
        value={data}
      >
        Add Mail
      </Button>
      {data.map((a) => (
        <h3>{a}</h3>
      ))}
      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        onClick={(e) => submit(e)}
        color="success"
        disabled={data[1] == null ? true : false}
      >
        <NavLink to="/batch" style={{ textDecoration: "none", color: "white" }}>
          Submit
        </NavLink>
      </Button>
    </div>
  );
}

export default BatchEdit;
