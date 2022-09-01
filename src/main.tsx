import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import FinancesPage from "./pages/FinancesPage";
import TodoPage from "./pages/TodoPage";

const DATA = [
	{ id: "todo-0", name: "Eat", completed: true },
	{ id: "todo-1", name: "Sleep", completed: false },
	{ id: "todo-2", name: "Repeat", completed: false },
];

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Router>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/todo' element={<TodoPage tasks={DATA} />} />
			<Route path='/finances' element={<FinancesPage />} />
		</Routes>
	</Router>
);
