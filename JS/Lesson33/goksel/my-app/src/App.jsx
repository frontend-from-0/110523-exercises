import { List } from './components/List';
import { Account } from './components/Account';
import { Navbar } from './components/Navbar';
import { PerformanceState } from './components/PerformanceState';
import { useUser } from './modules/user/UserProvider';

import './App.css';

import { todoData, TodoProvider } from './modules/todos/TodoProvider';

export const App = () => {

	const user = useUser();

	return (
		<TodoProvider initialState={todoData} >
			<div className='container'>
				<Navbar />
				{user.isLoggedInUser ? <Account /> : <></>}
				<div className='app'>
					<List />
				</div>
				<PerformanceState />
			</div>
		</TodoProvider>
	);
};
