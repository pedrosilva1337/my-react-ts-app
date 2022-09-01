import React, { useState } from "react";

export default function Form(props) {
	function handleChange(e) {
		setName(e.target.value);
	}

	const [name, setName] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		props.addTask(name);
		setName("");
	}

	return (
		<form onSubmit={handleSubmit} className='text-center'>
			<h2 className='mb-4'>
				<label className='text-3xl font-semibold' htmlFor='new-todo-input'>
					What needs to be done?
				</label>
			</h2>
			<input
				type='text'
				id='new-todo-input'
				name='text'
				className=' flex shadow appearance-none border h-12 w-1/2 px-4 mb-2 mx-auto text-gray-700'
				value={name}
				onChange={handleChange}
			/>
			<button
				type='submit'
				className=' w-1/2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-6 box-border border-2 border-gray-500'
			>
				Add
			</button>
		</form>
	);
}
