import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import FileBase from "react-file-base64";

export default function ControlledInputs() {
  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [users, setUsers] = useState([]);
  function nameHandler(e) {
    // console.log(e.target.value);
    setName(e.target.value);
  }
  function emailHandler(e) {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    // console.log(e.target.value);
    setPassword(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const user = {
      id: new Date().getTime().toString(),
      name,
      email,
      password,
      file,
    };
    console.log(user);
    setUsers([...users, user]);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <h1 className="text-center">Controlled Inputs</h1>
      <div className="main">
        <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={nameHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={emailHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 relative"
            controlId="exampleForm.ControlInput3"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? "password" : "text"}
              placeholder="name@example.com"
              value={password}
              onChange={passwordHandler}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FaRegEyeSlash className="absolute bottom-3 right-4" />
              ) : (
                <FaRegEye className="absolute bottom-3 right-4" />
              )}
            </span>
          </Form.Group>
          <div className="mb-4">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setFile(base64)}
            />
          </div>
          <Button type="submit" variant="success">
            Submit
          </Button>
        </Form>
        <div className="main w-[90%] mx-auto mt-4 flex flex-wrap justify-center gap-2">
          {users.map((mereUsers) => {
            return (
              <Card style={{ width: "18rem" }} key={mereUsers.id}>
                <Card.Img variant="top" src={mereUsers.file} />
                <Card.Body>
                  <Card.Title>{mereUsers.name}</Card.Title>
                  <Card.Text>{mereUsers.email}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// CRUD
// C - create
// R - read
// U - update
// D - delete
