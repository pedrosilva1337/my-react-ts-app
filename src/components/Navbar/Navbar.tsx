import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className='App'>
			<ul className='App-header'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/todo'>Todo App</Link>
				</li>
				<li>
					<Link to='/finances'>Finances</Link>
				</li>
			</ul>
		</div>
	);
}
