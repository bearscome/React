import {useState} from "react"
import UserName from './UserName'

export default function Hello ({age}) {
    //props는 변경 불가. 읽는 값임
    const [name, setName] = useState('Mike')
          //변수명, name변경 값,  // 초기값

    //const [age, setAge] = useState (props.age)

    const msg = age > 19 ? '성인 입니다' : '미성년자 입니다'

    function changeName() {
        setName(name === 'Mike' ? "Jane" : "Mike")
        //setAge(age + 1)
    }
    return(
        <>
           <h2>{name} {age}세 : {msg}</h2>
           <UserName name = {name}/>
           <button onClick={changeName}>chageName</button>
        </>
    )
}
