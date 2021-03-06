import React from "react"
import styles from "./TextBlink.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

const TextBlink = ({ text, textAlign, white }) => {
    return (
        <h1
            className={join([cStyles.bigText, cStyles.openSansCondensed])}
            style={{ textAlign: textAlign ? textAlign : "left", color: white ? "white" : "black"}}
        >
            {text + " "}
            <span
                className={join([
                    styles.blink,
                    cStyles.colorYellow,
                    cStyles.bigText
                ])}
            >
                _
            </span>
        </h1>
    )
}

export default TextBlink
