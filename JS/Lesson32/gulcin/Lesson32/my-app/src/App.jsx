import { List } from './components/List';
import { Account } from './components/Account';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useContext } from 'react';
import {UserContext} from './UserContext';
import './App.css';

export const App = () => {
	const user = useContext(UserContext);

	return (
		<div className='container'>
			<Navbar />
			{user.isLoggedInUser ? <Account /> : <></> }
			<div className='app'>
				<List />
			</div>
			<PerformanceState />
		</div>
	);
};
