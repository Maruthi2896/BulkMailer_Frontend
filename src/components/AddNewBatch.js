import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";

function AddNewBatch() {
  let [data, setData] = useState([]);
  let [mail, setMail] = useState("");
  let [test, setTest] = useState(true);
  let [batch, setBatch] = useState("");
  const handleChange = (e) => {
    setMail(e.target.value);
    setTest(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail));
  };
  const handleChange1 = (e) => {
    setBatch(e.target.value);
  };
  const addmail = () => {
    if (test) {
      data.push(mail);
      console.log(...data);
      setMail("");
      test = true;
    }
  };
  const submit = async (e) => {
    e.preventDefault();
    if (data != []) {
      let arr = {
        mails: data,
        batchName: batch,
      };
      setData([]);
      await axios
        .post("https://bulk-mail-server.onrender.com/batch/addbatch", arr)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h4>Enter the Name of Batch:</h4>
        <TextField
          id="standard-basic"
          label="Standard"
          onChange={(e) => handleChange1(e)}
          variant="standard"
        />
      </div>
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
          <NavLink
            to="/batch"
            style={{ textDecoration: "none", color: "white" }}
          >
            Submit
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default AddNewBatch;
