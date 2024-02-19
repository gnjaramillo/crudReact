//App,jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TodoApp from './componentes/todoApp.jsx';
import Todo from './componentes/todo.jsx';

function App() {
  return (
    <div>
      <Routes>
        {/* Define la ruta de TodoApp */}
        <Route path="/todoApp" element={<TodoApp />} />
        {/* Define la ruta de Todo */}
        <Route path="/todo" element={<Todo />} />
        {/* Define la ruta por defecto */}
        <Route path="*" element={<Navigate to="/todoApp" />} /> Utiliza Navigate para redirigir
      </Routes>
    </div>
  );
}

export default App;

