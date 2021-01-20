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

