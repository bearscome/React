/*const Hello = function() {
    <p>HEllow</p>
}

const Hello = () => {
    <p>HEllow</p>
}

export default Hello;
*/

import World from "./World";
import Styles from "./Hello.module.css"

export default function Hello () {
    return(
        <>{/* 스타일 주는 방법_1*/}
            <h1 style={{
                color : 'red',
                borderRight : '1px solid #000',
                marginBottom : '50px',
                opacity : 0.5

            }}>Hello</h1>
            <div className = {Styles.box}>헬로</div> {/*Styles를 선언하고 클래스를 객체로 가져옴 */}
        </>
    )
}