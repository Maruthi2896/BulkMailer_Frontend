import React from "react";
import SelectBatch from "./SelectBatch";
import TextEditor from "./texteditor";
import FromMail from "./FromSend";

function MailBox() {
  return (
    <div>
      <h3>Select Batch</h3>
      <SelectBatch />
      <FromMail />
      <TextEditor />
    </div>
  );
}

export default MailBox;
