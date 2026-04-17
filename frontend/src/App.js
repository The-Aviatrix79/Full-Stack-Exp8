import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      {path === '/dashboard' ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
