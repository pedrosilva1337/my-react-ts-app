import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

const FILTER_MAP = {
	All: () => true,
	Active: (task) => !task.completed,
	Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);
	const [filter, setFilter] = useState("All");

	const filterList = FILTER_NAMES.map((name) => (
		<FilterButton
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	function toggleTaskCompleted(id) {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	function deleteTask(id) {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
	}

	function editTask(id, newName) {
		const editedTaskList = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, name: newName };
			}
			return task;
		});
		setTasks(editedTaskList);
	}

	const taskList = tasks
		.filter(FILTER_MAP[filter])
		.map((task) => (
			<Todo
				id={task.id}
				name={task.name}
				completed={task.completed}
				key={task.id}
				toggleTaskCompleted={toggleTaskCompleted}
				deleteTask={deleteTask}
				editTask={editTask}
			/>
		));
	const tasksNoun = taskList.length !== 1 ? "tasks" : "task";

	const headingText = `${taskList.length} ${tasksNoun} remaining`;

	function addTask(name: string) {
		const newTask = { id: `todo-${nanoid()}`, name, completed: false };
		setTasks([newTask, ...tasks]);
	}

	return (
		<div className='App'>
			<h1 className='text-center text-5xl font-bold mb-4'>My Todo List</h1>
			<Form addTask={addTask}></Form>
			<div className='flex flex-wrap flex-row justify-around w-1/2 mx-auto'>
				{filterList}
			</div>

			<div className='max-w-md mx-auto'>
				<h2 className='font text-3xl font-medium mt-6 text-center'>
					{headingText}
				</h2>
				<ul role='list' className='todo-list'>
					{taskList}
				</ul>
			</div>
		</div>
	);
}

export default App;
