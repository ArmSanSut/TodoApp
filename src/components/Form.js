import React, { useEffect } from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, editTodo, setEditTodo }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const updateTodo= (text, id, completed)=> {
        const newTodo = todos.map((todo) => 
  
            todo.id === id ? {text, id, completed} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo){
            setInputText(editTodo.text)
        }else {
            setInputText("")
        }
    },[setInputText, editTodo])

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([
                ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
            ]);

            //clear input to be empty !
            setInputText("")
        } else {
            updateTodo(inputText, editTodo.id, editTodo.completed)
        }

    };
    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form