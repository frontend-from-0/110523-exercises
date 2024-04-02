  
export const Ex6 = () => {

    function handleClick(e) {
        e.preventDefault();
    }
  
    return(
        <a href="https://www.google.com.tr" onClick={handleClick} target="_blank" className="link">Click Me</a>
    )
  }