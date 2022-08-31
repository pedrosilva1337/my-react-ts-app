import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const DATA = [
	{ id: "todo-0", name: "Eat" },
	{ id: "todo-1", name: "Sleep" },
	{ id: "todo-2", name: "Repeat" },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App tasks={DATA} />
	</React.StrictMode>
);
