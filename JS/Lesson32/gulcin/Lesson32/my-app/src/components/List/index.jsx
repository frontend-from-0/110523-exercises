import './styles.css';
import { useContext } from 'react';
import { TodosContext } from '../../todosContext';

export const List = () => {
	const todos = useContext(TodosContext);
	function handleClick (id) {
		console.log('Clicked on item in List component');
	};

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button className={'btn'}>X</button>
				</li>
			))}
		</ul>
	);
};
