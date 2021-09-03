function Confirmation(props) {
  return (
    <div className="confirmation">
      <div className="modal">
        <p>Are you sure?</p>
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
