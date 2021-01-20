import React from 'react';

import './Button.css';

export const Button = ({ name, className }) => (
  <button type="button" className={`button ${className}`}>
    {name}
  </button>
);

//<button className={props.classNameButton} data-action={props.dataAction} data-id={props.dataId}>{props.title}</button>
