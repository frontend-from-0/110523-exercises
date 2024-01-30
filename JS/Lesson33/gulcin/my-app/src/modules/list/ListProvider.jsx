import { createContext, useReducer, useContext } from "react";


export const todoData = [
    {id: 1, title: "Do dishes", completed: false},
    {id: 2, title: "Do homework", completed: false},
    {id: 3, title: "Go running", completed: false},
    {id: 4, title: "Do dishes 2", completed: false},
    {id: 5, title: "Do homework 3", completed: false},
    {id: 6, title: "Go running 4", completed: false},
  ];

export const TODOLIST_ACTIONS = {
   toDoCompleted: 'todo_completed',
   delete: 'delete',

}

export const TodoListContext = createContext();
export const TodoListDispatchContext = createContext();

export const ListProvider = ({children, initialState}) => {
    const [todos, dispatch] = useReducer(listReducer, initialState);

     return(
        <TodoListContext.Provider value={todos}>
           <TodoListDispatchContext.Provider value={dispatch}>
             {children}
           </TodoListDispatchContext.Provider>
        </TodoListContext.Provider>
     )
}
function listReducer(state, action) {
    switch(action.type) {
       case TODOLIST_ACTIONS.delete: {
        return( 
           [...state.filter(todo => todo.id !== action.id)]
         );
       }
       case TODOLIST_ACTIONS.completed: {
        return(
            [...state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo) 
            ]
        )
       }
        default: throw Error(`Action type ${action.type} is not supported`);
    }
}



export const useList = () => useContext(TodoListContext);
export const useListDispatch = () => useContext(TodoListDispatchContext);

