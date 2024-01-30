import { useList } from '../../modules/list/ListProvider';


export const PerformanceState = () => {

	const todos = useList();

	const completedTodos = todos.filter(todo => todo.completed).length;

	return <div>{`Completed  ${completedTodos} of ${todos.length}`}</div>;
};
