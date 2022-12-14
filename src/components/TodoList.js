import React from "react";
import Todo from "./Todo";


const TodoList = ({ todos, setTodos, setEditTodo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo 
                        todos = {todos} 
                        setTodos= {setTodos} 
                        key={todo.id} 
                        text = {todo.text} 
                        id = {todo.id}
                        todo = {todo}
                        setEditTodo = {setEditTodo}
                    />
                ))}
            </ul>
        </div>
    )
}
export default TodoList;