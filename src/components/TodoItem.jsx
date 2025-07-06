import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`flex items-center justify-between p-3 rounded-md shadow-sm transition-all duration-300 ${todo.completed ? 'bg-green-100' : 'bg-white hover:bg-gray-100'}`}>
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
