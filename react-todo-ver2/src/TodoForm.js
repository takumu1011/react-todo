import React from 'react';
import Todo from './Todo';

function TodoForm(props) {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <label>
        新しいTodo
        <input onChange={props.onChange} value={props.value} />
      </label>
      <button type="submit">追加する</button>
    </form>
  );
}

export default TodoForm;
