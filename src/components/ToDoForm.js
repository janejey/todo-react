import { useState } from "react";
import './form.css'

function ToDoForm({onAdd}) {
    const [text, setText] = useState("")
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(text.trim().length){onAdd(text)};
            setText("")
        }}>
            <div className="new-task-form">
                <input className="text-form" type="text" placeholder="Add a new task" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button className="button-form">Add</button>
            </div>
        </form>
    )
}

export default ToDoForm;