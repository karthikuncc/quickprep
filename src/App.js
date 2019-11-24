import React,{useState} from 'react';
import Todo from './Components/Todo/Todo'
import './App.css';
import TodoForm from './Components/Todo/TodoForm';

function App() {
  const [todos,setTodos] = useState([
    { 
      text:"Learn about React",
      isCompleted:false
    },
    {
      text:'Meet friend for lunch',
      isCompleted:false
    },
    {
      text:'Build really cool todo',
      isCompleted:false
    }
  ]);

  const addTodo = text =>{
    const NewTodos =[...todos,{text}];
    setTodos(NewTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted =true;
    setTodos(newTodos);
  }

   const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div>
        {todos.map((todo,index) =>(
          <Todo 
              key={index} 
              index={index} 
              todo={todo} 
              completeTodo={completeTodo}
              removeTodo ={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}

export default App;
