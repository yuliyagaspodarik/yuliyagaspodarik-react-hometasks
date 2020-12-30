import React from 'react';

import './TodoItem.css';

import { TodoInfoBlock } from '../TodoInfoBlock/TodoInfoBlock';
import { TodoControlBlock } from '../TodoControlBlock/TodoControlBlock';

export function TodoItem(props) {
  return (
    <React.Fragment>
      <h3>{props.content}</h3>
      <TodoInfoBlock todoStatus={props.todoState} todoDateCreated={props.todoDateCreate} todoDateComplited={props.todoDateComplite}/>
      <TodoControlBlock />
    </React.Fragment>
  )
}
