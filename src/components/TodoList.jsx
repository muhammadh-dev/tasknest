import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, filter, toggleTodo, deleteTodo }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <ul className="space-y-2">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        {filteredTodos.length === 0 && (
          <li className="p-4 text-center text-gray-500 bg-gray-100 rounded-md">No tasks to show</li>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
