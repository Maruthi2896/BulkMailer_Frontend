import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import maruthiTripPic from "./assets/maruthiTripPic.jpg";
const Profile = maruthiTripPic;

function Contact() {
  let [mail, setMail] = useState("");
  let [num, setNum] = useState("");
  let [mes, setMes] = useState("");
  let [sub, setSub] = useState("");
  let [name, setName] = useState("");
  let [test, setTest] = useState(true);
  let [tes, setTes] = useState(true);
  let [te, setTe] = useState(true);

  const submit = async (e) => {
    e.preventDefault();
    let data = {
      mail: mail,
      num: num,
      mes: mes,
      sub: sub,
      name: name,
    };
    setMail("");
    setMes("");
    setSub("");
    setNum("");
    setName("");

    e.preventDefault();
    await axios
      .post("https://bulk-mail-server.onrender.com/contact", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    setMail(e.target.value);
    setTest(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail));
  };
  const handleChange1 = (e) => {
    setNum(e.target.value);
    setTes(/^\d{9}$/g.test(num));
  };
  const handleChange2 = (e) => {
    setName(e.target.value);
    setTe(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/g.test(name));
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea style={{ alignItems: "center" }}>
            <CardMedia
              component="img"
              height="300"
              image={Profile}
              alt="green iguana"
              style={{
                width: 250,
                height: 150,
                marginTop: "20px",
                marginLeft: "90px",
              }}
            />
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3>Send him a mail</h3>
              <TextField
                id="outlined-basic"
                label={te ? "Name(First let Cap)" : "Error"}
                error={!te ? true : false}
                variant="outlined"
                message="first letter must Caps"
                onChange={(e) => handleChange2(e)}
                value={name}
              />
              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label={test ? "Email:" : "Error"}
                  error={!test ? true : false}
                  onChange={(e) => handleChange(e)}
                  value={mail}
                />

                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(e) => handleChange1(e)}
                  value={num}
                  label={tes ? "Phone Number:" : "Error"}
                  error={!tes ? true : false}
                />
              </div>

              <TextField
                id="outlined-basic"
                label="Subject:"
                variant="outlined"
                onChange={(e) => setSub(e.target.value)}
                value={sub}
              />
              <TextField
                id="outlined-multiline-static"
                label="Message:"
                multiline
                style={{ width: "300px" }}
                rows={6}
                onChange={(e) => setMes(e.target.value)}
                value={mes}
              />
              <Button
                variant="contained"
                onClick={(e) => submit(e)}
                endIcon={<SendIcon />}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Send
                </NavLink>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div style={{ width: "500px" }}>
        <h1>Maruthi K J</h1>
        <h4>MERN Stack web developer</h4>
        <h3>maruthikj4@gmail.com</h3>
        <h3>+919663458560</h3>
        <p>
          Completed MERN Stack 6 month Course At Guvi an IIT Madras and IIM
          Ahmedabad incubated company based in Chennai, India
        </p>
        <p>❤️❤️❤️</p>
      </div>
    </div>
  );
}

export default Contact;
