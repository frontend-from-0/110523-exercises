import { useData, useDataDispatch, TODO_ACTIONS } from '../../modules/todos/TodoProvider';
import './styles.css';

export const List = () => {

	const todos = useData();
	const dispatch = useDataDispatch();

	function handleClick (id) {
		console.log('Clicked on item in List component');
		dispatch({type: TODO_ACTIONS.todoCompleted, id: id})
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
