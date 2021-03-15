import {useState} from "react"

export default function Hello () {
    const [name, setName] = useState('Mike')
          //변수명, name변경 값,  // 초기값

    function changeName() {
        setName(name === 'Mike' ? "Jane" : "Mike")
    }
    return(
        <>
           <h1>state</h1> 
           <h2>{name}</h2>
           <button onClick={changeName}>chageName</button>
        </>
    )
}
