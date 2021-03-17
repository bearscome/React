import dummy from '../db/data.json'
import Word from './Word'
import {useParams} from 'react-router-dom'

export default function Day() {
   // dummy.words
    const {day} = useParams()
    const wordList = dummy.word.filter(word => (
        word.day === Number(day)
    ))
   return <>
   <h2>Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <Word word={word} key ={word.id}/>
            ))}
            
        </tbody>
    </table>
   </>
}