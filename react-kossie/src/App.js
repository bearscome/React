import React, {useState, useEffect} from 'react'

import './App.css';
import Counter from './Components/Counter';

function App() {
  const [buttonName, setButtonName] = useState('클릭')
  
  const click = () => {
    setButtonName('click')
  }
  return (
    <div className="App">
      <h3>효성아 공부하자!</h3>
      <Counter click = "click1"/>
      <Counter click = {buttonName}/>
      <Counter />
      <button onClick = {click}>Click</button>
    </div>
  );
}

export default App;
