import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar(props) {
	return (
		<div>
			<ul className='nav'>
				<li className={props.home}>
					<Link to='/'>
						<button className='btn'>Home</button>
					</Link>
				</li>
				<li className={props.todo}>
					<Link to='/todo'>
						<button className='btn'>Todo App</button>
					</Link>
				</li>
				<li className={props.finances}>
					<Link to='/finances'>
						<button className='btn'>Finances</button>
					</Link>
				</li>
			</ul>
		</div>
	);
}
