import { Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className='Home'>
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

export default App;
