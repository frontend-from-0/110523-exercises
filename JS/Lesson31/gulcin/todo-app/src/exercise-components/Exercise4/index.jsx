export const Ex4 = () => {
   const handleClick = (event) => {
        alert(`You clicked on ${event.target.innerText}`);
   }

   return(
    <ul onClick={handleClick}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </ul>
   )
}