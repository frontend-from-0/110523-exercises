import './styles.css';
import { TodoContext } from '../../data';
import { useContext } from 'react';

export const List = () => {


	const todo =  useContext(TodoContext);

	function handleClick (id) {
		console.log('Clicked on item in List component');
	};

	return (
		<ul className='todo__list'>
			{todo.map((item) => (
				
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
