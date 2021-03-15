import World from "./World";
import Styles from "./Hello.module.css"

export default function Hello () {
    function ShowName () {

    }

    function ShowAge (age) {
        console.log(age)
    }

    function ShowText(text) {
        console.log(text)
    }

    return(
        <>
           <h1>Hello</h1> 
           <button >Show name</button>
           <button onClick={ShowAge(10)}>Show age</button>
           <input type='text' onChange = { (e) =>{
                const text = e.target.value;
                ShowText(text)
           }}/>
        </>
    )
}

//상황에 맞게 가독성이 좋은 함수 작성