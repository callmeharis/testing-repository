import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function App() {
  // to preserve a value
  // to re-render that initial state

  const [text, setText] = useState("Ali");
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function changeText() {
  //   setText("Haris");
  // }
  function increment() {
    setValue(value + 1);
  }
  function decrement() {
    if (value < 1) {
      setValue(0);
    } else {
      setValue(value - 1);
    }
  }
  function reset() {
    handleShow();
    setValue(0);
  }
  return (
    <div className="container text-center">
      <h1>Counter</h1>
      {/* <h1>{text}</h1>
      <Button variant="success" onClick={changeText}>
        Click
      </Button> */}
      <div className="counter">
        <h1>{value}</h1>
        <div className="btns">
          <Button variant="success" className="mx-1" onClick={increment}>
            Increment
          </Button>
          <Button variant="danger" className="mx-1" onClick={reset}>
            Reset
          </Button>
          <Button variant="warning" className="mx-1" onClick={decrement}>
            Decrement
          </Button>
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation message</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to reset?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
