import React, {useState} from 'react'
import './App.css';

function App() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Submitted')
    console.log(username, password)
  }



  return (
    <div className="App">
      <form onSubmit = {onSubmit}>
      <input placeholder="Username" value = {username} onChange = {(e) => setUserName(e.target.value)}/><br/>
      <input placeholder="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/><br/>
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
