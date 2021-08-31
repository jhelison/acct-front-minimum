import React, { useState } from "react"
import styleModule from "./style.module.css"
import style from "./style.module.css"

import { join } from "./util.js"

const ContactsForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [buttonLabel, setButtonLabel] = useState("Enviar")

    const sendForm = () => {
        fetch("/_v/leads/", {
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
        <div className={styleModule.form}>
            <div className={styleModule.row}>
                <h3 className={styleModule.contactsFormTitle}>
                    Solicite nosso contato:
                </h3>
            </div>

            <div className={styleModule.row}>
                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        Nome<span>*</span>
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        E-mail<span>*</span>
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            <div className={styleModule.row}>
                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        Telefone<span>*</span>
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                    />
                </div>

                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        País<span>*</span>
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                    />
                </div>
            </div>

            <div className={styleModule.row}>
                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        Empresa<span>*</span>
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                    />
                </div>

                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>Cargo</label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                    />
                </div>
            </div>

            <div className={styleModule.row}>
                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        Numero de colaboradores
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                    />
                </div>

                <div className={styleModule.half}>
                    <label className={styleModule.contactsLabel}>
                        Url do site
                    </label>
                    <input
                        className={styleModule.contactsFormInput}
                        type="text"
                    />
                </div>
            </div>

            <div className={styleModule.row}>
                <div className={styleModule.rowFull}>
                    <label className={styleModule.contactsLabel}>
                        Como podemos ajudar?<span>*</span>
                    </label>
                    <textarea className={styleModule.contactsFormTextarea} />
                </div>
            </div>

            <div className={styleModule.row}>
                <button className={getButtonStyle()} onClick={sendForm}>
                    {buttonLabel}
                </button>
            </div>
        </div>
    )
}

export default ContactsForm
