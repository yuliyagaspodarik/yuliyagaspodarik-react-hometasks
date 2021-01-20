import React from 'react';

import './TodForm.css';

export class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.count = 1;

    this.state = {todoDescription: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.onCreatedTodo = this.props.onCreatedTodo;
  }

  handleChange(event) {
    this.setState({todoDescription: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const nextId = 5 + this.count++;

    const todo = {
      text: this.state.todoDescription,
      state: "in-process",
      dateCreated: Date().toString(),
      dateCompleted: null,
      id: nextId,
    };

    this.setState({todoDescription: ""});

    this.onCreatedTodo(todo);
  }

  handleClear(event) {
    this.setState({todoDescription: ""});
  }

  render() {
    return (
      <React.Fragment>
        <h1>What do you need to do?</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo-description"
            value={this.state.todoDescription}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add"/>
          <input type="button" value="Clear" onClick={this.handleClear}/>
        </form>
      </React.Fragment>
    )
  }
}
