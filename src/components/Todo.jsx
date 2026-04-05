function Todo({ task, togglePopUp }) {
    function deleteHandler() {
        console.log("Delete", task);
    }

    return (
        <div className="todo-item">
            <h2>{task}</h2>
            <button onClick={() => togglePopUp()}>Delete</button>
        </div>
    )
}

export default Todo;