import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [condition, setCondition] = useState(false)
  const toggle = () => setCondition(!condition)
  useEffect(() => {
    console.log(condition)
  }, [condition]) 

  const renderConditon = condition ? 'true' : 'false'
  return (
    <div className="App">
      <h1>효성아 공부하자!</h1>
      <div>
        {renderConditon}
      </div>
      <button onClick = {toggle}>Toggle</button>
    </div>
  );
}

export default App;
