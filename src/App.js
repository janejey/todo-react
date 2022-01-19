import { useReducer, useState } from 'react';
import './App.css';
import ToDoFooter from './components/ToDoFooter';
import ToDoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';

function reducer(state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
    ]
  } else if (action.type === 'delete') {
    return state.filter((t) => t.id !== action.payload.id)
  }
  else if (action.type === 'change') {
    return state.map((todo) => {
      if(todo.id === action.payload.changedTodo.id) {
        return action.payload.changedTodo
      }
      return todo
    })
  }
  else if(action.type === 'clearCompleted') {
    return state.filter((todo) => !todo.isCompleted)
  }
}
    

function App() {

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: true
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn Redux",
      isCompleted: false
    }
  ])

  return (
    <div className="App">
      <ToDoForm onAdd={(text) => {
        dispatch({
          type: 'add',
          payload: {
            text
          }
        })

      }} />
      <TodoList
        todos={todos}
        onChange={(newTodo) => {
          dispatch({
            type: 'change',
            payload: {
              changedTodo: newTodo
            }
          })
          // setTodos(todos.map((todo) => {
          //   if (todo.id === newTodo.id) {
          //     return newTodo
          //   }
          //   return todo
          // }))
        }}

        onDelete={(todo) => {
          dispatch({
            type: 'delete',
            payload: {
              id: todo.id
            }
          })
        }
        }
      />
      <ToDoFooter todos={todos}
      onClearCompleted={(todo)=>{
        dispatch({
          type:'clearCompleted',
          payload:{
            todo: todo.isCompleted
          }
        })
      }
    }/>
    </div>
  );
}

export default App;
