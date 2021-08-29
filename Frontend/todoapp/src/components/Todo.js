import React, { useState } from "react";
import Confirmation from "./Confirmation.js";
import ConfirmationBG from "./ConfirmationBG.js";

function Todo(props) {
  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);

  function deleteHandler() {
    setConfirmationIsOpen(true);
  }

  function closeHandler() {
    setConfirmationIsOpen(false);
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h2>{props.creator}</h2>
      <div className="flex">
        <button onClick={deleteHandler}>delete</button>
      </div>
      {confirmationIsOpen && (
        <Confirmation onCancel={closeHandler} onConfirm={closeHandler} />
      )}
      {confirmationIsOpen && <ConfirmationBG onCancel={closeHandler} />}
    </div>
  );
}

export default Todo;
