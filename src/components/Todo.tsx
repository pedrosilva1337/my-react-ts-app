import React from "react";

export default function Todo(props) {
	return (
		<li className='todo py-2'>
			<div className='c-cb mb-3 flex flex-row justify-start'>
				<input
					id={props.id}
					type='checkbox'
					defaultChecked={false}
					className='mr-2'
				/>
				<label className=' pr-5' htmlFor='todo-0'>
					{props.name}
				</label>
			</div>

			<div className='flex flex-row justify-between'>
				<button className='differentBasis bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black font-normal border-solid border-2 border-black focus:outline-none focus:underline'>
					Edit
				</button>
				<button className='differentBasis bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-bold focus:outline-none focus:underline'>
					Delete
				</button>
			</div>
		</li>
	);
}
