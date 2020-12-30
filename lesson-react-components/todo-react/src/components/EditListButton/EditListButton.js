import React from 'react';

import './EditListButton.css';

export function EditListButton(props) {
  return (
    <input type="button" id={props.id} value={props.value}/>
  )
}
