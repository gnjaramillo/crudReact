// todoApp.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Importamos Navigate para la redirección
import Todo from './todo'; // Importamos el componente Todo
import "./todoApp.css" // Importamos estilos CSS

const TodoApp = () => {
    // Definimos los estados para el título, descripción y la lista de todos
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [todos, setTodos] = useState([]); 

    // Manejador de cambio para el título
    function handleChange(event) {
        const { value } = event.target;
        setTitle(value);
    }
    
    // Manejador de cambio para la descripción
    function handleChangeDesc(event) {
        const { value } = event.target;
        setDescription(value);
    }

    // Manejador para la presentación del formulario
    function handleSubmit(e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
        // Crear un nuevo objeto de todo
        const newTodo = {
            id: crypto.randomUUID(), // Genera un ID aleatorio
            title: title,
            description: description,
            completed: false
        }
    
        const temp = [...todos]; // Crear una copia de la lista actual de todos
        temp.unshift(newTodo); // Agregar el nuevo todo al principio de la lista
        setTodos(temp); // Actualizar el estado de la lista de todos con la nueva lista
    
        setTitle(""); // Limpiar el título después de la presentación del formulario
        setDescription(""); // Limpiar la descripción después de la presentación del formulario

        
    }

    // Manejador para la actualización de un todo
    function handleUpdate(id, newValue, newDesc) {
        const temp = [...todos]; // Crear una copia de la lista actual de todos
        const item = temp.find(item => item.id === id); // Encontrar el todo correspondiente al ID
        item.title = newValue; // Actualizar el título del todo
        item.description = newDesc; // Actualizar la descripción del todo
        setTodos(temp); // Actualizar el estado de la lista de todos con la nueva lista
    }

    // Manejador para eliminar un todo
    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id); // Filtrar los todos y excluir el que coincide con el ID
        setTodos(temp); // Actualizar el estado de la lista de todos con la nueva lista
    }
    
    return (
        <div className='todoContainer'>
            <h1 className='tituloTodoContainer'>Area del conocimiento</h1>
            {/* Formulario para crear un nuevo todo */}
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input placeholder='Area del Conocimiento' onChange={handleChange} className='todoInput' value={title} />  
                <input placeholder='Descripcion' onChange={handleChangeDesc} className='todoInput' value={description} />
                
                <button type='submit' value="OK" className="buttonCreate">OK</button>
                <button type='button' className="buttonCancel" onClick={() => {setTitle(""); setDescription("")}} >CANCEL</button>
            </form>

            {/* Contenedor para mostrar la lista de todos */}
            <div className='todosContainer'> 
                {todos.map((item) => ( 
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </div>
        </div>
    );
}

export default TodoApp;


//Pasamos el objeto item completo 
// como prop al componente Todo, para que tenga acceso a todas las propiedades de ese elemento individual.