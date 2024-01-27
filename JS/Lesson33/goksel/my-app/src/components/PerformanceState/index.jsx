import { useData } from "../../modules/todos/TodoProvider";

export const PerformanceState = () => {

	const todos = useData();

	const completedTodos = todos.filter(todo => todo.completed).length;

	return <div>{`Completed ${completedTodos} of ${todos.length}`}</div>;
};
