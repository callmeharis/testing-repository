import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsComponent from "./news-project/NewsComponent";
import ControlledInputs from "./form-handling/ControlledInputs";
import MultipleInputs from "./form-handling/MultipleInputs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MultipleInputs />);
