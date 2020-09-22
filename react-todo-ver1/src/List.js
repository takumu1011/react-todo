import React from 'react';

function List(props) {
  let list = props.todos.map((todo, index) => {
    return <li key={'todo-' + index}>{todo}</li>;
  });
  return <ul>{list}</ul>;
}

export default List;
