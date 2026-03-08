// Imports necessary dependencies
import React from 'react'; // React library
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering React components to the DOM
import './styles/App.css'; // Imports styles for the app
import App from './App'; // Imports the main App component

// Creates the root element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Renders the App component inside the root element
root.render(
  <React.StrictMode>
    <App /> {/* Renders the App component */}
  </React.StrictMode>
);
