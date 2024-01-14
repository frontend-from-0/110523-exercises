import {useState} from 'react';
import {data} from '../../todoData';
import './styles.css';




export const ListEx8 = () => {
	const [todos, setTodos] = useState(data);



	
	function handleClick (id) {
		setTodos(prevState => prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
	};

	function deleteBtnClick(id) {
		setTodos((prev) => prev.filter((item) => item.id !== id));
	}

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<>
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button className={'btn'}>X</button>
					
				</li>
				<button onClick={() => deleteBtnClick(item.id)}>Clear</button>
				</>
			))}
		</ul>
	);
};
