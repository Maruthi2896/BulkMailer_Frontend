
import Navbar from "./components/navbar";
import "./App.css";
import { Box, styled } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MailBox from "./components/MailBox";
import Batch from "./components/Batch";
import Provide from "./context/Provide";
import BatchEdit from "./components/BatchEdit";
import AddNewBatch from "./components/AddNewBatch";
import Contact from "./components/Contact";

function App() {
  const Container = styled(Box)({
    width: "90%",
    backgroundColor: "#edf6f7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    margin: "0px 0px 10px 80px",
  });
  return (
    <Box className="App">
      <Container>
        <BrowserRouter>
          <Provide>
            <Navbar />
            <Routes>
              <Route path="/" element={<MailBox />} />
              <Route path="/batch" element={<Batch />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/batch/edit" element={<BatchEdit />} />
              <Route path="/batch/addbatch" element={<AddNewBatch />} />
            </Routes>
          </Provide>
        </BrowserRouter>
      </Container>
      <p>
        **For testing edit batch mails**
        <br />
        **don't click on edge of button, make sure you clicked on centre of
        button**
        <br />
        **Don't copy and paste mails there are chances showing invalid mail, so
        typing mail is good practice here**
      </p>
    </Box>
  );
}

export default App;
