import React from 'react';

function User({user, onRemove}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

function UserList({users, onRemove}) {
  return (
    <div>
      {users.map((user)=> <User user={user} key={user.id} onRemove={onRemove}/>)}
    </div>
  );
}

export default UserList;

/*
11강
리약트는 배열을 랜더링 할 때에는 key라는 props를 설정해야한다.
key 값은 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 지금의 경우에는 id가 고유 값이다.

만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map()함수를 사용 할 때 설정하는 콜백함ㅅ의 두번째 파라미터 index를 key로 사용하면 된다.
<div>
  {users.map((user, index) => <User user={user} key ={index}/>)}
</div>

리액트가 key 값이 필요한 이유는 각 고유 원소에 key가 이썽야만 배열이 업데이트 될 때 효율적으로 랜더링 되기 때문입니다.
배열을 랜더링 할 때에는 고유한 key 값이 있는 것이 중요하며, 만약에 배열안에 중복되는 key가 있을 떄에는
랜더링시에 오류메세지가 콘솔에 나타나며, 업데이트가 제대로 이루어지지 않게 됩니다. 
*/

