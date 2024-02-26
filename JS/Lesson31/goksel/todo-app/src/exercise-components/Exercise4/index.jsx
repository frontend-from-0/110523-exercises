import { useState } from "react";


export const Ex4 = () => {

    const MyData = [
        {
            id: '1',
            title: 'Text 1',
          },
          {
            id: '2',
            title: 'Text 2',
          },
          {
            id: '3',
            title: 'Text 3',
          },
          {
            id: '4',
            title: 'Text 4',
          },
          {
            id: '5',
            title: 'Text 5',
          },
          {
            id: '6',
            title: 'Text 6',
          },
    ]

    const [text, setText] = useState(null);

    return (
        
        <ul className="lists">
            {
                MyData.map((item) => (
                    <li onClick={() => {
                        setText(item.title); 
                        alert( `${item.title}  clicked` )
                    } 
                    }  >
                        
                        <span>{item.title}</span>
                    </li>
                ))
            }
        </ul>
    )
}