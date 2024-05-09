import { createContext, useContext, useReducer } from "react";

export const todoData = [
    { id: 1, title: "Do dishes", completed: false },
    { id: 2, title: "Do homework", completed: false },
    { id: 3, title: "Go running", completed: false },
    { id: 4, title: "Do dishes 2", completed: false },
    { id: 5, title: "Do homework 3", completed: false },
    { id: 6, title: "Go running 4", completed: false },
];


export const TODO_ACTIONS = {
    todoCompleted : "todo_completed"
}

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

export const TodoProvider = ({children, initialState}) => {

    const [todo, dispatch] = useReducer(todoReducer, initialState ?? {} );

    return (
        <TodoContext.Provider value={todo}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}

function todoReducer(state, action) {

    switch(action.type) {
        case "todo_completed": {
            return (
                [...state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo )]
            )
        }
        default: throw Error(`Action type ${action.type} is not supported`);
    }
}

export const useTodo = () => useContext(TodoContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);