import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const DEFAULT_TODOS = [
  { title: 'Reactで作るTodoアプリ' },
  { title: 'はじめてのReact', completed: true },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: DEFAULT_TODOS,
      newTodo: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onChange(e) {
    this.setState({
      newTodo: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { newTodo, todos } = this.state;
    if (!newTodo.trim()) {
      return;
    }
    const newTodos = todos.slice();
    newTodos.push({
      title: newTodo,
      completed: false,
    });
    this.setState({
      todos: newTodos,
      newTodo: '',
    });
  }
  onToggle(todo) {
    const { todos } = this.state;
    const index = todos.indexOf(todo);
    if (index > -1) {
      let newTodos = todos.slice();
      todo.completed = !todo.completed;
      newTodos.splice(index, 1, todo);
      this.setState({
        todos: newTodos,
      });
    }
  }
  onRemove(todo) {
    const { todos } = this.state;
    const index = todos.indexOf(todo);
    if (index > -1) {
      let newTodos = todos.slice();
      newTodos.splice(index, 1);
      this.setState({
        todos: newTodos,
      });
    }
  }
  render() {
    return (
      <div className="todo">
        <TodoForm
          value={this.state.newTodo}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <TodoList
          todos={this.state.todos}
          onToggle={this.onToggle}
          onRemove={this.onRemove}
        />
      </div>
    );
  }
}

export default App;
