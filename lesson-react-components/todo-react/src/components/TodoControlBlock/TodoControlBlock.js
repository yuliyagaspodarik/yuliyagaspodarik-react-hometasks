import React from 'react';

import './TodoControlBlock.css';
import { ControlTodoButton } from '../ControlTodoButton/ControlTodoButton';

export function TodoControlBlock(props) {
  return (
    <React.Fragment>
      <div className="control-block">
        <ControlTodoButton classNameButton={} dataAction={} dataId={} title={}/>
        <ControlTodoButton classNameButton={} dataAction={} dataId={} title={}/>
        <ControlTodoButton classNameButton={} dataAction={} dataId={} title={}/>
        <ControlTodoButton classNameButton={} dataAction={} dataId={} title={}/>
      </div>
    </React.Fragment>
  )
}
