import React, { useEffect, useState } from "react";

export default function WindowSizeComponent() {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resizing window");
      setSize(window.innerWidth);
    });
  }, []);
  return (
    <div className="text-center">
      <h1>Window Size</h1>
      <h1>{size}px</h1>
    </div>
  );
}
