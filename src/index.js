import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Вы можете создать этот файл или удалить эту строку
import App from './App';
import $ from 'jquery';

window.jQuery = window.$ = $;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 