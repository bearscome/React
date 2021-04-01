import React from 'react';

class App extends React.Component {
  //마운트 함수들(생명주기) constructor, render, componenetDidUpdate, componentDidMount
  // 언마운트 componentWillUnmount
  constructor(props) { // 제일 먼저 실행되는 함수
    super(props)
    console.log('hello')
  }


  state = {
    count : 0
  }

  add = () => {(
    this.setState(current => ({
      count : current.count + 1
    }))
  )}

  minus = () => {
    this.setState(current => ({
      count : current.count - 1
    }))
  }


  componentDidUpdate() { // 셋스테이트가 실행된 후 랜더가 다시 그려지면 업데이트 되는 함수
    console.log('I just updated')
    //setState -> render -> componentIpdate
  }

  componentDidMount() { //랜더 끝나고 실행
    console.log('component rendered')
    // constructor ->  render -> componentDidMount
  }

  componentWillUnmount() { //컴포넌트가 화면을 떠날 때 실행되는 함수

  }

  render() { // 콘스트럭쳐 실행되고 랜더 실행
    console.log('render')
    return(
      <div>
        <h1>안녕 : {this.state.count}</h1>
        <button onClick = {this.add}>add</button>
        <button onClick = {this.minus}>minus</button>
      </div>
    )
  }
}
export default App;
