import { useContext } from "react";
import { TodoContext } from "../../data";

export const PerformanceState = () => {

	const todo = useContext(TodoContext);

	const completedTodos = todo.filter(todo => todo.completed).length;

	return <div>{`Completed ${completedTodos} of ${todo.length}`}</div>;
};


