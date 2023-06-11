import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';
// import './index.scss';
import { ToDoListPage } from './pages/ToDoListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // строгий режим StrictMode для безопасной разработки
  <React.StrictMode>
    <ToDoListPage />
  </React.StrictMode>
);