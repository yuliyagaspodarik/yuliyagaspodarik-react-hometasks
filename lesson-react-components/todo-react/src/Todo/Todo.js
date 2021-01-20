import React from 'react';

import './Todo.css';
import { LabeledDateTimePanel } from "../LabeledDateTimePanel/LabeledDateTimePanel";
import { TodoStatePanel } from '../TodoStatePanel/TodoStatePanel';
import { ControlBlockPanel } from '../ControlBlockPanel/ControlBlockPanel';

export const Todo = ({ todo }) => (
  <React.Fragment key={`div-${todo.id}`}>
    <h2>{todo.text}</h2>
    <dl>
      <TodoStatePanel state={todo.state}/>
      <LabeledDateTimePanel label={"Created"} dateTime={todo.dateCreated}/>
      <LabeledDateTimePanel label={"Completed"} dateTime={todo.dateCompleted}/>
    </dl>
    <ControlBlockPanel/>
  </React.Fragment>
);

