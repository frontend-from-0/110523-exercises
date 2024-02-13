import { useState } from "react";

export const Ex9 = () => {

    const[backgroundColor, setBackGroundColor] = useState("#fff")

    function handleClick(color) {
        setBackGroundColor(color);
    }

    return (
        <div style={{backgroundColor}}  className="btns">

            <button onClick={ () => handleClick("red")}>Red</button>
            <button onClick={ () => handleClick("black")}>Black</button>
            <button onClick={ () => handleClick("green")}>Green</button>
            <button onClick={ () => handleClick("orange")}>Orange</button>
            <button onClick={ () => handleClick("yellow")}>Yellow</button>

        </div>
    );
}