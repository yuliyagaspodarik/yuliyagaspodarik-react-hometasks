import React from 'react';

import './TodoApp.css';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoList } from './TodoList/TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todos: this.props.allTodo };

    this.handleCreatedTodo = this.handleCreatedTodo.bind(this);
  }

  handleCreatedTodo(todo) {
    const newTodos = [todo, ...this.state.todos];
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;
    console.log('===>',this.state);
    return (
      <div id="app-container">
        <TodoForm onCreatedTodo={this.handleCreatedTodo}/>
        <TodoList allTodo={todos}/>
      </div>
    );
  }
}

export default TodoApp;
