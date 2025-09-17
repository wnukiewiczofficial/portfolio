import ReactDOM from "react-dom/client";
import "./tailwind.css";
import Display from "./display";
import { HashRouter } from "react-router-dom";
import "./language/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HashRouter>
		<Display />
	</HashRouter>
);
