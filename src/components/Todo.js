import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {
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

    const updateHandler = (todoId, newValue) => {
        console.log("first")
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed === true ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="edit-btn" onClick={updateHandler}>
                <i className="fas fa-pen"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;