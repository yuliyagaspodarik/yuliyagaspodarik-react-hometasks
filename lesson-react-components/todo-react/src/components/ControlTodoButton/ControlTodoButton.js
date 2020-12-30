import React from 'react';

import './ControlTodoButton.css';

export function ControlTodoButton(props) {
  return (
    <button className={props.classNameButton} data-action={props.dataAction} data-id={props.dataId}>{props.title}</button>
  )
}
