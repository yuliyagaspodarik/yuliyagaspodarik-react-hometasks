import React from 'react';

import './TodoStatePanel.css';

export const TodoStatePanel = ({ state }) => {
  const labels = {
    done: "This todo was completed",
    "in-process": "You have to do this",
    postponed: "No need to do anything",
  };
  return (
    <React.Fragment>
      <dt>Status</dt>
      <dd>{labels[state]}</dd>
    </React.Fragment>
  )
};
/*
export function TodoStatePanel(props) {
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
*/
