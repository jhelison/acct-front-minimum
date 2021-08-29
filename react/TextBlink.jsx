import React from 'react'
import styles from './TextBlink.css'

const TextBlink = ({text, textAlign}) => {
    return (
        <h1 className={styles.title} style={{textAlign:textAlign}}>
        {text + " "}
        <span className={styles.blink}>_</span>
      </h1>
    )
}

export default TextBlink