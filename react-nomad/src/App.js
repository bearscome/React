import React from 'react';

function App() {
  return (
    <>
      <h1>hello</h1>
      <Food fav="김치"/>
      <Food fav="라면"/>
      <Food fav="김밥"/>
    </>
  )
}

function Food({fav}) { //({fav})

  return (
    <h1>{fav}</h1>
  )
}
export default App;
