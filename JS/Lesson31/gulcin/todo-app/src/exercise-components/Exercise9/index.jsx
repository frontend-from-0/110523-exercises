export const Ex9 = () => {
   
   function changeColor (e) {
        e.target.style.backgroundColor = e.target.innerText;
   }
    return (
       <div>
          <button onClick={changeColor}>Red</button>
          <button onClick={changeColor}>Blue</button>
          <button onClick={changeColor}>Purple</button>
          <button onClick={changeColor}>Green</button>
       </div>
    )
}