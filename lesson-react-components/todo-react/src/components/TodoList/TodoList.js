import React from 'react';

import './TodoList.css';
import { Counter } from '../Counter/Counter';
import { StatisticPanel } from '../StatisticPanel/StatisticPanel';
import { EmptyList } from '../EmptyList/EmptyList';
import { TodoItem } from '../TodoItem/TodoItem';

export function TodoList(props) {
  return(
    <React.Fragment>
      <div className="todo-list-container">
        <h1>My ToDos</h1>
        <h2>
          <Counter textId="total-counter-text" totalId="total-counter-number" optionCounter="Total Todo Count" count={props.counter}/>
        </h2>
        <StatisticPanel />
        <div className="todo-list">
          <EmptyList />
          <TodoItem content={props.editFormValue} todoStatus={props.todoState} todoDateCreated={props.todoDateCreate} todoDateComplited={props.todoDateComplite}/>
        </div>
      </div>
    </React.Fragment>
  )
}
