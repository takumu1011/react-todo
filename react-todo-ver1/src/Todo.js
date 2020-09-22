import React from 'react';
import Form from './Form';
import List from './List';
import Task from './Task';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  // handleChange(todo) {
  //   this.setState({
  //     todos: this.state.todos.concat(todo),
  //   });
  // }
  handleAdd(text) {
    this.setState({
      todos: this.state.todos.concat({
        text,
        completed: false,
      }),
    });
  }
  handleToggleCompleted(e) {
    const newTodos = this.state.todos.map((todo, index) => {
      if (e.id === index) {
        todo.completed = e.completed;
      }
      return todo;
    });
    this.setState({
      todos: newTodos,
    });
  }
  handleRemove(e) {
    let newTodos = this.state.todos.filter((todo, index) => {
      return e.id !== index;
    });
    this.setState({
      todos: newTodos,
    });
  }
  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (
        <Task
          id={index}
          onToggleCompleted={this.handleToggleCompleted}
          onRemove={this.handleRemove}
          {...todo}
        />
      );
    }, this);
    return (
      <div>
        <h1>Todoアプリ</h1>
        <Form onAdd={this.handleAdd} />
        <List todos={todos} />
      </div>
    );
  }
}

export default Todo;
