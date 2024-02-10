import { useTodo } from "../../modules/todos/TodoProvider";

export const PerformanceState = () => {

	const todos = useTodo();

	const completedTodos = todos.filter(todo => todo.completed).length;

	return <div>{`Completed ${completedTodos} of ${todos.length}`}</div>;
};
