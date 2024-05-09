
export const Ex7 = () => {

    function handleChild(e) {
        e.stopPropagation();
        alert("Child Element Clicked");
    }
    function handleParent() {
        alert("Parent Element Clicked");
    }
     

    return(
        <button className="parent" onClick={handleParent}>
            <p>Parent Element</p>
            <button className="child" onClick={handleChild}>
                <p>Child Element</p>
            </button>
        </button>
    )
}