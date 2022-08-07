import React from "react";

const Todo = ({ todo, text, todos, setTodos, setEditTodo }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed : !item.completed
                }
            } 
            return item;
        }))
    };

    const editHandler = (todoId, newValue) => {
        const findTodo = todos.find((el) => el.id === todo.id)
        setEditTodo(findTodo)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed === true ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="edit-btn" onClick={editHandler}>
                <i className="fas fa-pen"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;