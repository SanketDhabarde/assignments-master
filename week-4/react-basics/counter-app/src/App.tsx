import { useState } from 'react'
import './App.css'

interface Todo {
  id: number,
  title: string,
  description: string,
  done: boolean
}

const TODOS: Todo[] = [
  {
    id: 1,
    title: "go to gym",
    description: "got o gym from 7 to 8",
    done: false
  },
  {
    id: 2,
    title: "go to gym1",
    description: "got o gym1 from 7 to 8",
    done: false
  }
]

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleClick(id:number) {
    setTodos(todos => todos.map(todo => todo.id === id ? ({...todo, done: true}) : todo));
  }

  function handleAddTodo() {
    const newTodo = {
      id: todos.length +1,
      title, description,
      done: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function handleDeleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

   return (
    <>
    
    <div className="user-form">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'/>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
    <div className="todos">
      {todos.map(todo => <Todo {...todo} onClick={handleClick} handleDelete={handleDeleteTodo}/>)}
    </div>
    </>
  )
}

interface TodoProps extends Todo {
  onClick: (id: number) => void
  handleDelete: (id: number) => void
}

function Todo({id, title, description, done, onClick, handleDelete}:TodoProps) {

  return (
    <div className="todo">
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => onClick(id)}>{done ? "Done" : "Mark as done"}</button>
      <button onClick={() => handleDelete(id)}>Delete todo</button>
    </div>
  )
}

export default App
