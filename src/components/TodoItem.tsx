import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo
}
export const TodoItem: React.FC<Props> = ({todo, toggleTodo}: Props) => {
    return <li>
        <label>{todo.text}</label>
        <input type="checkbox" checked={todo.complete} onClick={() => toggleTodo(todo)} /> 
    </li>
}