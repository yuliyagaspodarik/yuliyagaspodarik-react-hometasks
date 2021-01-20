import React from 'react';

import './TodoList.css';
import { EmptyList } from '../EmptyList/EmptyList';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ allTodo }) => allTodo.length === 0 ? (<EmptyList/>) : (
  <React.Fragment>
    <h1>Things to do</h1>
    <ul>
      {allTodo.map((todo) => (
        <li key={`li-${todo.id}`}>
          <Todo todo={todo}/>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

