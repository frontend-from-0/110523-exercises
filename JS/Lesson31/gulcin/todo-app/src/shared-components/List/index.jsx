import {useState} from 'react';
import {data} from '../../todoData';
import './styles.css';

export const List = () => {
	const [todos, setTodos] = useState(data);
	
	function handleClick (id) {
		setTodos(prevState => prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
	};

	function handleDelete (id) {
        setTodos(prevState => prevState.filter(todo => todo.id !== id));
	}

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button onClick={() => handleDelete(item.id)}className={'btn'}>X</button>
				</li>
			))}
		</ul>
	);
};
