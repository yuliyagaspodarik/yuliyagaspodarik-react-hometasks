import React from 'react';

import './App.css';

import { EditForm } from './components/EditForm/EditForm';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <React.Fragment id="app-container">
      <EditForm />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
