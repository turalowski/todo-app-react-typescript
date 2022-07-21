import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoItem: React.FC<Props> = ({addTodo}) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input type="text" value={text} onChange={event =>  setText(event?.target.value)} />
      <button type="submit" onClick={event => {
        event.preventDefault();
        addTodo(text);
        setText('')
      }}>Add Todo</button>
    </form>
  );
};