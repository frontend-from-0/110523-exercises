import { useState } from 'react';
import {data} from '../../todoData';

export const Ex8 = () => {

    const [todos, setTodos] = useState(data)

    const handleClick = (id)=>{
setTodos(prev=>prev.filter(item=> item.id !== id))
    }
    return(
        <ul>
         {
            todos.map((todo)=>(
                <>
                <li key={todo.id}>{todo.title}</li>
                <button onClick={()=>handleClick(todo.id)}>X</button>
                </>
            ))
         }
        </ul>
    )
}