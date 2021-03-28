import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;

/*
10강
useref는 특정 Dom 선택
//https://velog.io/@suuhyeony/React-useRef-useEffect
특정 DOM을 가리킬 때 사용하는 Hook 함수.
Ex. 포커스 설정, 특정 엘리먼트의 크기/색상 변경 등..

1) useRef( )를 사용해 Ref객체 만들기
2) 해당 객체를 활용한 작업 설정 .current.focus()
3) 만든 Ref객체를 선택하고 싶은 DOM에 ref 값으로 설정하기
-> Ref객체의 .current값은 선택한 DOM을 가리키게 된다!
+) useRef에 파라미터를 넣어주면, 이 값이 .current의 기본 값이 된다!


*/
