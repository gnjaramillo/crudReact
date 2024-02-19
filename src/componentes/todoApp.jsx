// todoApp.jsx
import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import Todo from './todo'; 
import "./todoApp.css"

const TodoApp = () => {
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [todos, setTodos] = useState([]); 

    function handleChange(event) {
        const { value } = event.target;
        setTitle(value);
    }
    
    function handleChangeDesc(event) {
        const { value } = event.target;
        setDescription(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        const newTodo = {
            id: crypto.randomUUID(), //genera id aleatorio
            title: title,
            description: description,
            completed: false
        }
    
        const temp = [...todos]; 
        temp.unshift(newTodo); 
        setTodos(temp); 
    
        setTitle("");
        setDescription("");

        // Redirección a Todo
        <Navigate to="/todo">Redirigir a Todo</Navigate>
    }

    function handleUpdate(id, newValue, newDesc) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = newValue;
        item.description = newDesc;
        setTodos(temp);
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id); 
        setTodos(temp);
    }
    
    return (
        <div className='todoContainer'>
            <h1 className='tituloTodoContainer'>Area del conocimiento</h1>
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input placeholder='Area del Conocimiento' onChange={handleChange} className='todoInput' value={title} />  
                <input placeholder='Descripcion' onChange={handleChangeDesc} className='todoInput' value={description} />
                
                <button type='submit' value="OK" className="buttonCreate">OK</button>
                <button type='button' className="buttonCancel" onClick={() => {setTitle(""); setDescription("")}} >CANCEL</button>
            </form>

            <div className='todosContainer'> 
                {todos.map((item) => ( 
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;