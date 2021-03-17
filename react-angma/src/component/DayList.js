import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function DayList() {
    const [days, setDays] = useState([]);


    useEffect(() => { 
        fetch('http://localhost:3001/days')
        .then(res => {
            return res.json()
        })
        .then(data=>{
            setDays(data)
        })
    },[]) 
    

    return(
        <ul className ="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`day/${day.day}`}>
                        Day {day.day}
                    </Link>
                </li>
            ) )}
        </ul>
    )
}

/*
    const [days, setDays] = useState([]);
    const [counte, setCount] = useState(0)

    function onClick() {
        setCount(counte + 1);
    }

    function onClick2() {
        setDays([
            ...days,
            {
                id:Math.random(),
                day : 1
            }
        ])
    }

    useEffect(() => { //상태 값이 변경되어 다시 랜더링 된 다음에 호춤 됨
        console.log('countChange')
    },[]) // 카운트가 변경되었을 때만 useEffect는 가능 -> 의존성 배열
    //랜더링 직후 한 번만 실행할 때는 빈 배열
*/