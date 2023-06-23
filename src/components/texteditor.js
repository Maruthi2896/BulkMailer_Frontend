import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import dataContext from "../context/Create";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

function TextEditor() {
  const textbox = useContext(dataContext);
  const [value, setValue] = useState("");
  const [vali, setVali] = useState(false);
  const [loader, setLoader] = useState(false);
  console.log("validation:", vali);

  textbox.setText(value);

  const Cancelled = (e) => {
    textbox.setMonth([]);
    textbox.setSub([]);
    textbox.setFmail([]);
    textbox.setText([]);
    textbox.setTmail([]);
    textbox.setClick(true);
    setValue([]);
  };

  const Submit = async (e) => {
    setVali(true);
    e.preventDefault();

    if (
      textbox.month === [] ||
      textbox.sub === "" ||
      textbox.fmail === [] ||
      textbox.tmail === [] ||
      textbox.text === ""
    ) {
      alert(
        " Sorry ! all the fields must be filled!!, Please Refresh page fill again!!"
      );
    } else {
      setLoader(true);
      await axios
        .post("https://bulk-mail-server.onrender.com/data", textbox.data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
      textbox.setMonth([]);
      textbox.setSub([]);
      textbox.setFmail([]);
      textbox.setText([]);
      textbox.setTmail([]);
      setValue([]);
      setVali(false);
      setLoader(false);
    }
  };
  return (
    <div>
      {loader ? (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
          <LinearProgress color="success" />
          <LinearProgress color="inherit" />
        </Stack>
      ) : (
        <></>
      )}
      <ReactQuill
        theme="snow"
        className="texteditor"
        value={value}
        onChange={setValue}
      />

      <div className="footer">
        <Button
          variant="outlined"
          disabled={vali ? true : false}
          onClick={(e) => Submit(e)}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Send
          </NavLink>
        </Button>
        <Button variant="outlined" onClick={(e) => Cancelled(e)}>
          Cancel
        </Button>
      </div>
      <p style={{ marginTop: "-20px" }}>
        After send button clicked wait for 3 to 4 sec , don,t click again again
        because second time you click there in no data to send server will get
        crash...
      </p>
    </div>
  );
}
export default TextEditor;
