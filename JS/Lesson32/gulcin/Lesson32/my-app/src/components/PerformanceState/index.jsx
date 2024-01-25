import { useContext } from "react";
import { TodosContext } from "../../todosContext";

export const PerformanceState = () => {
	const todos = useContext(TodosContext);

	const completedTodos = todos.filter(todo => todo.completed).length;

	return <div>{`Completed ${completedTodos} of ${todos.length}`}</div>;
};
