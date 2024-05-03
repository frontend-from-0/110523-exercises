import { useState } from "react";

export const Ex9 = () => {
   const [color, setColor] = useState('#fff');

   function changeColor(newColor) {
      setColor(newColor);
   }
   return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
         <button style={{ backgroundColor: `${color}` }} onClick={() => changeColor('#f00905')}>Red</button>
         <button style={{ backgroundColor: `${color}` }} onClick={() => changeColor('#0625bf')}>Blue</button>
         <button style={{ backgroundColor: `${color}` }} onClick={() => changeColor('#7607ed')}>Purple</button>
         <button style={{ backgroundColor: `${color}` }} onClick={() => changeColor('#19f205')}>Green</button>
      </div>
   )
}