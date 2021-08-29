import React from "react"
import styles from "./TextBlink.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

const TextBlink = ({ text, textAlign }) => {
    return (
        <h1
            className={join([cStyles.bigText, cStyles.textUpper])}
            style={{ textAlign: textAlign }}
        >
            {text + " "}
            <span
                className={join([
                    styles.blink,
                    cStyles.colorYellow,
                    cStyles.bigText,
                ])}
            >
                _
            </span>
        </h1>
    )
}

export default TextBlink
