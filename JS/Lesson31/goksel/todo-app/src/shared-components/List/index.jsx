import {useState} from 'react';
import {data} from '../../todoData';
import './styles.css';
import { Ex8 } from '../../exercise-components/Exercise8';




export const List = () => {
	const [todos, setTodos] = useState(data);

	function handleClick (id) {
		setTodos(prevState => prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
	};



	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<>
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<Ex8 todos = {item} setTodos = {setTodos} />
					<button className={'btn'}>X</button>
				</li>
				

				
				</>
			))}
		</ul>
	);
};
