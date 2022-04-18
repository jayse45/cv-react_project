import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Personal from './ components/personal';
import Education from './ components/education';
import Experience from './ components/experience';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Personal />
    <Education/>
    <Experience />
  </React.StrictMode>
);


