import React, { useState } from "react"
import style from "./style.module.css"

import { join } from "./util.js"

const LeadsForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [buttonLabel, setButtonLabel] = useState("Enviar")

    const sendForm = async () => {
        await fetch("/_v/leads/", {
            method: "put",
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,PUT,GET",
            },
            body: JSON.stringify({
                name,
                email,
            }),
        })
            .then(() => {
                setName("")
                setEmail("")
                setButtonLabel("Sucesso!")
            })
            .catch(() => {
                setName("")
                setEmail("")
                setButtonLabel("Erro!")
            })
    }

    const getButtonStyle = () => {
        if (buttonLabel === "Enviar") {
            return style.leadsFormSubmit
        } else if (buttonLabel === "Sucesso!") {
            return join([style.leadsFormSubmitSucess])
        } else if (buttonLabel === "Erro!") {
            return join([style.leadsFormSubmitError])
        }
    }

    return (
        <div className={style.leadsForm}>
            <div className={style.leadsRow}>
                <h3 className={style.leadsFormTitle}>Fale com a gente!</h3>
            </div>

            <div className={style.leadsRow}>
                <input
                    className={style.leadsFormInput}
                    type="text"
                    placeholder="Nome*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={style.leadsRow}>
                <input
                    className={style.leadsFormInput}
                    type="e-mail"
                    placeholder="E-mail*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={style.leadsRow}>
                <button className={getButtonStyle()} onClick={sendForm}>
                    {buttonLabel}
                </button>
            </div>
        </div>
    )
}

export default LeadsForm
