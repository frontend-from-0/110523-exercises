import { useState } from "react";
import "./styles.css";


export const Ex5 = () => {
    const [coordinates, setCoordinates] = useState({ x: null, y: null });

    function handleClick() {

        setCoordinates({ x: window.event.clientX, y: window.event.clientY });
    }
    return (

        <div className="ex5">
            <button onClick={handleClick}>Get Mouse Coordinates</button>
            <p>Mouse coordinates : X:{coordinates.x}, Y: {coordinates.y} </p>
        </div>
    )
}