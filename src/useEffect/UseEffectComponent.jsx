import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function UseEffectComponent() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("Random Text");
  useEffect(() => {
    console.log("useEffect logic rendered here..");
    document.title = `New title : ${value} : ${text}`;
  }, [value, text]);
  console.log("component rendered here..");
  return (
    <div className="text-center">
      <h1 className="text-center">useEffect Component</h1>
      <h1>{text}</h1>
      <Button variant="secondary" onClick={() => setText("New Text")}>
        Click
      </Button>
      <h1>{value}</h1>
      <Button variant="primary" onClick={() => setValue(value + 1)}>
        Click
      </Button>
    </div>
  );
}
