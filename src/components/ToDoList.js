import ToDoItem from "./ToDoItem"

function TodoList({todos, onChange, onDelete}) {
    return (
        <div>
            {
                todos.map((todo)=> {
                    return (
                       <ToDoItem key={todo.id}
                       todo={todo}
                       onChange={onChange}
                       onDelete={onDelete}
                       />
                    )
                })
            }
        </div>
    )
}

export default TodoList