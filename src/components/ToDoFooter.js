import './footer.css'
function ToDoFooter ({todos, onClearCompleted}) {
    const completedToDos = todos.filter((todo)=>todo.isCompleted).length
    return(
        <div className='footer-form'>
            <span>{completedToDos}/{todos.length} Completed</span>
            <button className='footer-button' onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default ToDoFooter;