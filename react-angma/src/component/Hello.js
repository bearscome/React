/*const Hello = function() {
    <p>HEllow</p>
}

const Hello = () => {
    <p>HEllow</p>
}

export default Hello;
*/

import World from "./World";

export default function Hello () {
    return(
        <>
            <h1>Hello</h1>
            <World/>
            <World/>
        </>
    )
}