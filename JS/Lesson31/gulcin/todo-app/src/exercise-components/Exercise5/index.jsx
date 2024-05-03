export const Ex5 = () => {
    const handleClick = (event) => {
        alert(`X coords: ${event.clientX}  Y coords: ${event.clientY}`)
    }
    return (
        <button onClick={handleClick}>Where am I ?</button>
    )
}