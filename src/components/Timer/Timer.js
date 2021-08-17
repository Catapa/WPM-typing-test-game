import React, {useEffect, useState} from 'react'
import styles from './Timer.module.css'
const Timer = (props) => {
    const one_second_interval = 1000
    const [seconds, setSeconds] = useState(props.seconds)
    useEffect(() => {
        setTimeout(() => {
            if(seconds > 0) {
                setSeconds(seconds - 1)
            }
        }, one_second_interval)
    })
    return (
        <div className={styles.timer}>
            <span>{seconds}</span>
            <span>s</span>
        </div>

    )

}
export default Timer