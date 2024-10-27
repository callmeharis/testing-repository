import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import FileBase from "react-file-base64";

export default function MultipleInputs() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    about: "",
    // avatar: "",
  });
  const [users, setUsers] = useState([]);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUsers([...users, user]);
    setUser({
      name: "",
      email: "",
      age: "",
      about: "",
    });
  };
  return (
    <div>
      <h1 className="text-center">Multiple Inputs</h1>
      <div className="main">
        <Form className="w-1/2 mx-auto" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              value={user.name}
              onChange={changeHandler}
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={user.email}
              onChange={changeHandler}
              name="email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 relative"
            controlId="exampleForm.ControlInput3"
          >
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="30"
              value={user.age}
              onChange={changeHandler}
              name="age"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>About yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={user.about}
              onChange={changeHandler}
              name="about"
            />
          </Form.Group>
          {/* <div className="mb-4">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setUser({ ...user, avatar: base64 })}
            />
          </div> */}
          <Button type="submit" variant="success">
            Submit
          </Button>
        </Form>
        <div className="main w-[90%] mx-auto mt-4 flex flex-wrap justify-center gap-2">
          {users.map((mereUsers) => {
            return (
              <Card style={{ width: "18rem" }} key={mereUsers.id}>
                <Card.Img variant="top" src={mereUsers.avatar} />
                <Card.Body>
                  <Card.Title>{mereUsers.name}</Card.Title>
                  <Card.Text>{mereUsers.age}</Card.Text>
                  <Card.Text>{mereUsers.about}</Card.Text>
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
