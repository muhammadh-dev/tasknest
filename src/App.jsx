import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">To-Do List</h1>
        <div className="mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-3 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTodo}
            className="mt-2 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transform hover:scale-105 transition"
          >
            Add Task
          </button>
        </div>
        <div className="mb-6 flex justify-center">
          <div className="flex space-x-0 rounded-md overflow-hidden">
            <button onClick={() => setFilter('all')}
              className={`px-3 py-2 font-medium ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-l-md`}>
              All
            </button>
            <button onClick={() => setFilter('completed')}
              className={`px-3 py-2 font-medium ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              Completed
            </button>
            <button onClick={() => setFilter('pending')}
              className={`px-3 py-2 font-medium ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-r-md`}>
              Pending
            </button>
          </div>
        </div>
        <TodoList
          todos={todos}
          filter={filter}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
