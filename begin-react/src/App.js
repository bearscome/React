import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    username : '',
    email:''
  })

  const {username, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers([...users, user])

    setInputs({
      username : '',
      email:''
    })
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove = {onRemove}/>
    </>
  );
}

export default App;

/*
12강 useRef로 컴포넌트 안의 변수 만들기
useRef는 돔 선택할 때 말고 다른용도가 한가지 더 있음 그것은 컴포넌트 안에서 조회 및 수정을 할 수 있는 변수 관리
useRef로 관리하는 변수는 값입 바뀐다고 해서 컴포넌트가 리랜더링되지 않습니다.
리액트 컴포넌트에서의 상태는 상태를 바꾼느 함수를 호출하고 나서 그 다음 랜더링 이후로 업데이트 된 상태를 조회할 수 있는 반면,
useRef로 관리하는 있는 변수는 설정 후 바로 조회 할 수 있습니다.

이 변수를 사용하여 다음과 같은 값을 관리 할 수 있습니다.

setTimeout, setInterval 을 통해서 만들어진 id
외부 라이브러리를 사용하여 생성된 인스턴스
scroll 위치


useRef 를 사용하여 변수를 관리하기 전에 해야 할 작업이 있습니다.

지금은 우리가 UserList 컴포넌트 내부에서 배열을 직접 선언해서 사용을 하고 있는데요, 
이렇게 UserList 에서 선언해서 사용하는 대신에, 
이 배열을 App 에서 선언하고 UserList 에게 props 로 전달을 해주겠습니다

useRef()를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 갑스이 기본값이 됩니다.
그리고 이 값을 수정 할떄에는 .current 값을 수정하면 되고 조회 할 때에는 .cureent를 조회하면 됩니다.
*/