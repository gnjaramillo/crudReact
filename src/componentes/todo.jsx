// Todo.jsx
import React, { useState } from 'react';

// Componente funcional Todo que recibe props item, onUpdate y onDelete
function Todo({ item, onUpdate, onDelete }) {
    // Estado para controlar si se está editando el todo o no
    const [isEdit, setIsEdit] = useState(false);

    // Componente interno para el formulario de edición del todo
    function FormEdit() {
        // Estados para controlar los nuevos valores del título y descripción
        const [newValue, setNewValue] = useState(item.title);
        const [newDesc, setNewDesc] = useState(item.description);

        // Manejador para la presentación del formulario de edición
        function handleSubmit(e) {
            e.preventDefault(); // Prevenir comportamiento por defecto del formulario
            onUpdate(item.id, newValue, newDesc); // Llamar a la función onUpdate para actualizar el todo
            setIsEdit(false); // Cambiar el estado de isEdit a false para volver a la visualización del todo
        }

        // Manejador para el cambio en el valor del título
        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        // Manejador para el cambio en el valor de la descripción
        function handleChangeDesc(e) {
            const value = e.target.value;
            setNewDesc(value);
        }

        // Retornar el formulario de edición
        return (
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue} />
                <input type="text" className='todoInput' onChange={handleChangeDesc} value={newDesc} />
                <button className='buttonUpdate' type="submit">Update</button>
            </form>
        );
    }

    // Componente interno para la visualización del todo
    function TodoElement() {
        return (
            <section className='todoContent'>
                <div className='todoInfo'> 
                    <div>
                        <h1>Nombre</h1>
                        <span className='todoTitle'>{item?.title}</span>
                    </div>
                    <div>
                        <h1>Descripción</h1>
                        <span className='todoDesc'>{item?.description}</span>
                    </div>       
                    <div>
                        <h1>Opciones</h1>
                        {/* Botón para editar el todo */}
                        <button className='buttonEdit' onClick={() => setIsEdit(true)}>Edit</button>
                        {/* Botón para eliminar el todo */}
                        <button className='buttonDelete' onClick={(e) => onDelete(item.id)}>Delete</button>
                    </div>
                </div>
            </section>
        );
    }

    // Retornar el componente Todo, mostrando el formulario de edición si isEdit es true, o la visualización del todo en caso contrario
    return (
        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    );
}

// Exportar el componente Todo
export default Todo;
