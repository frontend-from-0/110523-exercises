import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

import { UserContext } from './UserContext';
import { loggedInUser } from './UserContext';

import { TodoContext } from './data';
import { todoData } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={loggedInUser}>
      <TodoContext.Provider value={todoData}>
        <App />
      </TodoContext.Provider>
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

