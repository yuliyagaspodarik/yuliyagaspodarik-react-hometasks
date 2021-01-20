import React from 'react';

import './Button.css';

export const Button = ({ name, className }) => (
  <button type="button" className={`button ${className}`}>
    {name}
  </button>
);
