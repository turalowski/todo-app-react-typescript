import React, {useState} from 'react';
import {TodoList} from './components/TodoList'
import {AddTodoItem} from './components/AddTodoItem'
const initialTodos: Todo[] = [
  {
    text: 'Todo 1',
    complete: false,
  },
  {
    text: 'Todo 2',
    complete: false
  }
]
function App() {

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <AddTodoItem addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
