import React from "react";
import { Button, Card, Typography, styled } from "@mui/material";
import { useContext } from "react";
import dataContext from "../context/Create";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Batch() {
  const tada = useContext(dataContext);
  const data = tada.name;
  const CardDesign = styled(Card)`
    width: 400px;
  `;

  const Container = styled("div")`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  `;
  const Edit = (id) => {
    tada.idd.push(id);
  };
  const Delete = async (id) => {
    await axios
      .delete(`https://bulk-mail-server.onrender.com/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const AddBatch = styled(Button)``;
  return (
    <div>
      <Container className="cards">
        {data.map((a) => (
          <CardDesign variant="outlined">
            <Typography
              variant="h5"
              style={{ marginTop: "20px", color: "grey", width: "300px" }}
            >
              Batch:{a.name}
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px" }}>
              Students mail List:
            </Typography>
            {a.mails.map((ele, i) => (
              <p>
                {i + 1}.{ele}
              </p>
            ))}
            <div>
              <Button
                style={{ margin: "20px" }}
                variant="outlined"
                onClick={() => Edit(a._id)}
              >
                <NavLink to="/batch/edit" style={{ textDecoration: "none" }}>
                  Edit
                </NavLink>
              </Button>
              <Button
                variant="outlined"
                color="error"
                style={{ margin: "20px" }}
                onClick={() => Delete(a._id)}
              >
                Delete
              </Button>
            </div>
          </CardDesign>
        ))}
      </Container>
      <AddBatch variant="contained">
        <NavLink
          to="/batch/addbatch"
          style={{ textDecoration: "none", color: "white" }}
        >
          Add New Batch
        </NavLink>
      </AddBatch>
    </div>
  );
}

export default Batch;
