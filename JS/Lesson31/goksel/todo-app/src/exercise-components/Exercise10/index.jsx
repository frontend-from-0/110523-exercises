import { useState } from "react";

export const Ex10 = () => {

    const data = [
        {
            title: "Task1",
            id: 1
        },
        {
            title: "Task2",
            id: 2
        },
        {
            title: "Task3",
            id: 3
        },
        {
            title: "Task4",
            id: 4
        }

    ]

    const[text, setText] = useState(null);

    function handleClick(id) {
        setText(id);
        alert(` ${id} DoubleClicked`);
    }

    return (
        <ul className="ex10">
            {
                data.map((item) => (
                    <li onDoubleClick={ () => handleClick(item.title)}> {item.title} </li>
                ) ) 
            }
        </ul>
    )
}