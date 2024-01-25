import { useContext } from "react";
import { TodoContext } from "../../data";

export const PerformanceState = () => {

	const todos = useContext(TodoContext);

	const completedTodos = todos.filter(todo => todo.completed).length;

	return <div>{`Completed ${completedTodos} of ${todos.length}`}</div>;
};


