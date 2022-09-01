import { useState } from "react";

export default function Todo(props) {
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState("");

	function handleChange(e) {
		setNewName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.editTask(props.id, newName);
		setNewName("");
		setEditing(false);
	}

	const editingTemplate = (
		<form className='text-center' onSubmit={handleSubmit}>
			<div>
				<label className='text-xl font-semibold' htmlFor={props.id}>
					New name for {props.name}
				</label>
				<input
					type='text'
					className=' flex shadow appearance-none border h-12 w-1/2 px-4 mb-2 mx-auto text-gray-700'
					id={props.id}
					value={newName}
					onChange={handleChange}
				/>
			</div>
			<div className='flex flex-row justify-between'>
				<button
					type='button'
					className='basis-49 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black font-normal border-solid border-2 border-black focus:outline-none focus:underline'
					onClick={() => setEditing(false)}
				>
					Cancel
				</button>
				<button
					type='submit'
					className='basis-49 bg-black hover:bg-gray-900 active:bg-blac text-white font-bold focus:outline-none focus:underline'
				>
					Save
				</button>
			</div>
		</form>
	);

	const viewTemplate = (
		<div>
			<div className='c-cb mb-3 flex flex-row justify-start'>
				<input
					id={props.id}
					type='checkbox'
					className='mr-2'
					defaultChecked={props.completed}
					onChange={() => props.toggleTaskCompleted(props.id)}
				/>
				<label className=' pr-5' htmlFor={props.id}>
					{props.name}
				</label>
			</div>

			<div className='flex flex-row justify-between'>
				<button
					type='button'
					className=' basis-49 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black font-normal border-solid border-2 border-black focus:outline-none focus:underline'
					onClick={() => setEditing(true)}
				>
					Edit
				</button>
				<button
					type='button'
					className='basis-49 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-bold focus:outline-none focus:underline'
					onClick={() => props.deleteTask(props.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);

	return (
		<li className='\ py-2'>{isEditing ? editingTemplate : viewTemplate}</li>
	);
}
