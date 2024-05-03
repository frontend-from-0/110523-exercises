export const Ex6 = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Clicked!')
    }

    return (
        <a href='#' onClick={handleClick}>Click me and See nothing is going to happen!</a>
    )
}