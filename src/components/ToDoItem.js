import './item.css'
function ToDoItem({todo, onChange, onDelete}) {
    return (
        <div className='item-form'>
            <label className='label-form'>
                <input className='check-form' type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                {todo.text}
                <button className='delete-form' onClick={()=>{
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )

}

export default ToDoItem;