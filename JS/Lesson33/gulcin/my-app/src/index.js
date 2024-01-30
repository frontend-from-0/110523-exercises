import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider, loggedOutUser} from './modules/user/UserProvider';
import { ListProvider, todoData } from './modules/list/ListProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider initialState={loggedOutUser}>
      <ListProvider initialState={todoData}>
        <App />
      </ListProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
