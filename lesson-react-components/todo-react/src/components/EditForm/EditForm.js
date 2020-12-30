import React from 'react';

import './EditForm.css';

import { EditListButton } from '../EditListButton/EditListButton';

export function EditForm(props) {
  return (
    <React.Fragment>
      <div className="edit-form-container">
        <h1>Create Todo</h1>
        <div className="editor-form">
          <form>
            <div className="form-row-left">
              <input type="text" name="todo-text" id="todo-text" />
            </div>
            <div className="form-row-right">
              <EditListButton id="add-todo-button" value="Add"/>
              <EditListButton id="clear-form-button" value="Clear"/>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
