import React from 'react';

import './TodoInfoBlock.css';

export function TodoInfoBlock(props) {
  return (
    <React.Fragment>
      <div className="info-block">
        <p className="status-panel">{props.todoStatus}</p>
        <p className="created-date-panel">{props.todoDateCreated}</p>
        <p className="done-date-panel">{props.todoDateComplited}</p>
      </div>
    </React.Fragment>
  )
}
