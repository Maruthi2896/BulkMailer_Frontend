import dataContext from "./Create.js";
import React, { useState, useEffect } from "react";

function Provide(props) {
  //for DB
  const [name, setName] = useState([]);
  const [month, setMonth] = useState([]);
  const [admin, setAdmin] = useState([]);
  // from Mail UI
  const [sub, setSub] = useState("");
  const [text, setText] = useState("");
  const [fmail, setFmail] = useState([]);
  const [tmail, setTmail] = useState([]);
  const [click, setClick] = useState(false);
  const [idd, setIdd] = useState([]);

  const data = {
    sub: `${sub}`,
    from: `${fmail}`,
    to: `${tmail}`,
    text: `${text}`,
    batch: `${month}`,
  };

  const [vali, setVali] = useState(true);

  useEffect(() => {
    fetch("https://bulk-mail-server.onrender.com", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);

  useEffect(() => {
    fetch("https://bulk-mail-server.onrender.com/admin", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  return (
    <dataContext.Provider
      value={{
        name,
        month,
        setMonth,
        admin,
        sub,
        setSub,
        text,
        setText,
        fmail,
        setFmail,
        tmail,
        setTmail,
        data,
        click,
        setClick,
        idd,
        setIdd,
        vali,
        setVali,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
}

export default Provide;
