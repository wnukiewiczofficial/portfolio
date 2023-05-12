import ReactDOM from "react-dom/client";
import "./index.css";
import Display from "./display";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Display />
  </HashRouter>
);
