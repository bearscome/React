import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState(0)

  useEffect(() => {
    console.log(count)
  },[test, count]) 
  // [useEffect는 리액트가 재 랜더링 되면 움직이는 함수, 
  // 그런데 모든 재랜더링에 반응함 그래서 배열에 값을 넣으면 그 값이 재랜더링 될때만 실행]

  useEffect(() => {
    console.log('처음 랜더링에만 반응')
  }, [])
  // 빈 어레이 값을 넣으면 한 번만 실행 됨

  const add = () => {
    setCount(count + 1)
  }


  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick = {add} >더하기</button>
      <button onClick = {() => {setTest(test + 1)}} >테스트</button>
    </div>
  );
}

export default App;
