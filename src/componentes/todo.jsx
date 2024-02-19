// Todo.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Todo({ item, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title);
        const [newDesc, setNewDesc] = useState(item.description);

        function handleSubmit(e) {
            e.preventDefault();
            onUpdate(item.id, newValue, newDesc);
            setIsEdit(false);
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleChangeDesc(e) {
            const value = e.target.value;
            setNewDesc(value);
        }

        return (
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue} />
                <input type="text" className='todoInput' onChange={handleChangeDesc} value={newDesc} />
                <button className='buttonUpdate' type="submit">Update</button>
            </form>
        );
    }

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
                        <button className='buttonEdit' onClick={() => setIsEdit(true)}>Edit</button>
                        <button className='buttonDelete' onClick={(e) => onDelete(item.id)}>Delete</button>
                    </div>
                </div>
                <button className='buttonNew' onClick={() => ( <Navigate to="/todo">Redirigir a Todo</Navigate>
                )}>New</button>
            </section>
        );
    }
    

    return (
        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    );
}



export default Todo;
