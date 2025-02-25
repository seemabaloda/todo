import { useReducer, useState } from "react";
import './App.css'
import reducer from './hook/reducer';
import { Trash2 } from "lucide-react"; // Import trash icon from Lucide


function App() {
  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      dispatch({ type: "add", payload: task });
      setTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <input type="text" placeholder='Enter Task' className="inputBox" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleKeyDown} />
      <button className='button' onClick={handleAddTodo}>Add Task</button>
      <button className='button' onClick={() => dispatch({ type: "clear" })} >Clear All</button>
      <ul>
        {state.map((todo) => (
          <li key={todo.id} style={{textAlign:"left"}}>
            {todo.text}{" "}
            <Trash2
              style={{ cursor: "pointer", color: "red", alignContent: "center", marginLeft:"30px"}}
              onClick={() => dispatch({ type: "remove", payload: todo.id })}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
