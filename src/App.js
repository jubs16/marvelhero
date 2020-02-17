import React from 'react';
//import UserForm from './components/UserForm';
import './App.css';
import Userstate from './components/login/Userstate'
import UserRedirect from './components/UserRedirect'

function App() {
  return (
    <div className="App">
      <Userstate />
      <UserRedirect />
    </div>
  );
}

export default App;
