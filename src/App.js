import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    getLocalTodo();
  }, []);

  useEffect(() => {
    saveLocalTodo();
  }, [todos]);

  const saveLocalTodo = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodo = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className='App'>
      <header>
        <h1>Todo's Lists</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
