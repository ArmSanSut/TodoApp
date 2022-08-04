import React from 'react'

const Form = ({inputText ,setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text : inputText, completed : false, id : Math.random()* 1000}
        ]);

        //clear input to be empty !
        setInputText("")
    };
    return (
        <form>
            <input type="text" className="todo-input" onChange={inputTextHandler} value = {inputText}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form