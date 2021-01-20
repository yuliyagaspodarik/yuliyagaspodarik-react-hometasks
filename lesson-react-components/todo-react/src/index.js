import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import TodoApp from './TodoApp';

const todos = [
  {
    "text": "One more todo demo record 114.",
    "state": "in-process",
    "dateCreated": "2021-01-10T22:04:44.054Z",
    "dateCompleted": null,
    "id": 1
  },
  {
    "text": "One more todo demo record 214.",
    "state": "in-process",
    "dateCreated": "2021-01-10T22:04:44.054Z",
    "dateCompleted": null,
    "id": 2
  },
  {
    "text": "One more todo demo record 314.",
    "state": "in-process",
    "dateCreated": "2021-01-10T22:04:44.054Z",
    "dateCompleted": null,
    "id": 3
  },
  {
    "text": "One more todo demo record 414.",
    "state": "in-process",
    "dateCreated": "2021-01-10T22:04:44.054Z",
    "dateCompleted": null,
    "id": 4
  },
  {
    "text": "123",
    "state": "in-process",
    "dateCreated": "2021-01-11T15:18:03.253Z",
    "dateCompleted": null,
    "id": 5
  }
];

ReactDOM.render(
  <React.StrictMode>
    <TodoApp allTodo={todos}/>
  </React.StrictMode>,
  document.getElementById('root')
);

