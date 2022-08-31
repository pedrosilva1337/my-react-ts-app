import React from "react";

export default function FilterButton(props) {
	return (
		<div className=' mt-2 items-center text-center'>
			<button className='w-32 border-solid border-2 border-black bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black font-normal focus:outline-none focus:underline py-1'>
				{props.buttonName}
			</button>
		</div>
	);
}
