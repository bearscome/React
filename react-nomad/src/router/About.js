import React from 'react'
import './About.css'

function About(props) {
    console.log('확인',props)
    return(
        <div className ="about__container">
            <span>About this page : I build it because I love movies.</span>
            <span>- George Orwell, 1984</span>
        </div>
        
    )
}

export default About