import React from 'react';
//import UserForm from './components/UserForm';
import './App.css';
import Userstate from './components/useraccess/login/Userstate'
import UserRedirect from './components/UserRedirect'
import Characters from './components/comics/characters'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from './components/useraccess/login/Userstate'
import Signup from './components/signup/UserForm'
import Random from './components/comics/marvel/jsontest'
import Comicsfetch from './components/comics/marvel/comics'
import Home from './components/useraccess/Home'
import Localjson from './components/comics/hero'

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/home' component={ Home }/>
        <Route exact path='/random' component={ Random }/>
        <Route exact path='/local' component={ Localjson}/>
        <Route exact path='/comicsfetch' component={ Comicsfetch }/>
        <Route exact path='/heros' component={ Characters }/>
        <Route exact path='/redirect' component={ Userstate} />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/register' component={ UserRedirect } />
        <Redirect from='*' to='/register' />        
    </Switch>
</BrowserRouter>
  );
}

export default App;
