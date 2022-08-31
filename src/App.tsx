import "./App.css";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App(props) {
	const taskList = props.tasks.map((task) => (
		<Todo
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
		/>
	));

	return (
		<div className='App'>
			<h1 className='text-center text-5xl font-bold mb-4'>My Todo List</h1>
			<Form></Form>
			<div className='flex flex-wrap flex-row justify-around w-1/2 mx-auto'>
				<FilterButton buttonName='All'></FilterButton>
				<FilterButton buttonName='Active'></FilterButton>
				<FilterButton buttonName='Completed'></FilterButton>
			</div>

			<div className='max-w-md mx-auto'>
				<h2 className='font text-3xl font-medium mt-6 text-center'>
					3 tasks remaining
				</h2>
				<ul role='list' className='todo-list'>
					{taskList}
				</ul>
			</div>
		</div>
	);
}

export default App;
