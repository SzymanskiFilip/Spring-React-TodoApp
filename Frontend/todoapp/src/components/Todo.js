import React, { useState } from "react";
import Confirmation from "./Confirmation.js";

function Todo(props) {
  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);

  function deleteHandler() {
    setConfirmationIsOpen(true);
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h2>{props.creator}</h2>
      <div className="flex">
        <button onClick={deleteHandler}>delete</button>
      </div>
      {confirmationIsOpen && <Confirmation />}
    </div>
  );
}

export default Todo;
