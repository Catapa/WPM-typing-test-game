import React from 'react'
import Char from "../Char/Char";
import styles from  './Word.module.css'
const word = (props) => {
    const formattedChars = props.word.split('').map((char, index) => {
        let charClasses = [styles.char]
        if(index === props.focusedIndex)
            charClasses.push(styles.focused)
        console.log(charClasses)
        return <Char key={index} classes={charClasses.join(' ')}>{char}</Char> })
    return (
        <React.Fragment>
            {formattedChars}
        </React.Fragment>

)
}
export default word