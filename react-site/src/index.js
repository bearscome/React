import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const user = {
   name : "sex",
   lastname : 'fuck'
}


function fullname(user) {
  return user.name + '' + user.lastname
}

const show = fullname(user)

ReactDOM.render(
  <h3>hellow {show}</h3>,
  document.getElementById('root')
);