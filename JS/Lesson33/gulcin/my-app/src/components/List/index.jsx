import './styles.css';
import { useList, useListDispatch, TODOLIST_ACTIONS } from '../../modules/list/ListProvider';

export const List = () => {
    const todos = useList();
	const dispatch = useListDispatch();

	function handleClick (id) {
		console.log('Clicked on item in List component');
		dispatch({type: TODOLIST_ACTIONS.completed, id: id})
	};

	function handleDelete(id) {
		console.log('deleted')
		dispatch({type: TODOLIST_ACTIONS.delete, id: id})
	}

	return (
		<ul className='todo__list'>
			{todos.map((item) => (
				<li onClick={() => handleClick(item.id)} key={item.id}>
					<span className={item.completed ? 'completed' : ''}>
						{item.title}
					</span>
					<button className={'btn'} onClick={() => handleDelete(item.id)}>X</button>
				</li>
			))}
		</ul>
	);
};
