import "./styles.css";

export const Ex8 = ({todos, setTodos}) => {

    function handleClick(id) {
        setTodos((prev) => prev.filter(item => item.id !== id))
    }

    return (
        <div className="buttons">
            <button onClick={() => handleClick(todos.id)}>Clear</button>
        </div>
    )
}