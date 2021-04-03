import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css'
import Navigation from './Navigation';
import About from './router/About'
import Home from './router/Home'
import Detail from './router/Detail'

function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path='/' exact={true} component={Home} />
    <Route path='/about' component={About} />
    <Route path='/movie-detail' component = {Detail}/>
  </HashRouter>
  )
}

export default App;
