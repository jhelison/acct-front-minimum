import React, { useEffect, useState } from "react"
import { Layout, PageBlock } from "vtex.styleguide"

import styles from "./AdminLeads.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

import { FiUsers } from "react-icons/fi"
import { FiUserPlus } from "react-icons/fi"
import { FiCheckCircle } from "react-icons/fi"

const AdminLeads = () => {
    const [prospects, setProspects] = useState(null)

    useEffect(() => {
        getProspects()
    }, [])

    const getProspects = async () => {
        try {
            const res = await fetch(
                "https://g0deojz10k.execute-api.us-east-2.amazonaws.com/items"
            )
            const resJson = await res.json()
            if (resJson) {
                if (resJson.Items) {
                    setProspects(resJson.Items)
                    return
                }
            }
            setProspects(null)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProspect = async (id) => {
        try {
            const res = await fetch(
                "https://g0deojz10k.execute-api.us-east-2.amazonaws.com/items/" +
                    id,
                {
                    method: "delete",
                }
            )
            getProspects()
        } catch (error) {
            console.log(error)
        }
    }

    const renderNotFound = () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>Nenhum prospecto ainda cadastrado</h1>
            </div>
        )
    }

    const renderProspectsTable = () => {
        return (
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                    {renderProspectsItems()}
                </tbody>
            </table>
        )
    }

    const renderProspectsItems = () => {
        return prospects.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.fone}</td>
                    <td
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            style={{
                                border: "none",
                                backgroundColor: "rgba(0,0,0,0)",
                                cursor: "pointer",
                            }}
                            onClick={() => deleteProspect(item.id)}
                        >
                            <svg
                                fill="red"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                            </svg>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    const renderHeader = () => {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.headerCardContainer}>
                    <div className={join([cStyles.dFlex, cStyles.flexCenter])}>
                        <FiUsers size={30} className={cStyles.colorGray} />
                    </div>
                    <div
                        className={join([
                            cStyles.dFlex,
                            cStyles.justifyCenter,
                            cStyles.flexColumn,
                        ])}
                    >
                        <h4
                            className={join([
                                cStyles.colorGray,
                                styles.textMargin,
                            ])}
                        >
                            Total de prospectos
                        </h4>
                        <h2
                            className={join([
                                cStyles.colorGreen,
                                styles.textMargin,
                            ])}
                        >
                            1231233
                        </h2>
                    </div>
                </div>
                <div className={styles.headerCardContainer}>
                    <div className={join([cStyles.dFlex, cStyles.flexCenter])}>
                        <FiUserPlus size={30} className={cStyles.colorGray} />
                    </div>
                    <div
                        className={join([
                            cStyles.dFlex,
                            cStyles.justifyCenter,
                            cStyles.flexColumn,
                        ])}
                    >
                        <h4
                            className={join([
                                cStyles.colorGray,
                                styles.textMargin,
                            ])}
                        >
                            Prospectos na semana
                        </h4>
                        <h2
                            className={join([
                                cStyles.colorGreen,
                                styles.textMargin,
                            ])}
                        >
                            1231233
                        </h2>
                    </div>
                </div>
                <div className={styles.headerCardContainer}>
                    <div className={join([cStyles.dFlex, cStyles.flexCenter])}>
                        <FiCheckCircle size={30} className={cStyles.colorGreen} />
                    </div>
                    <div
                        className={join([
                            cStyles.dFlex,
                            cStyles.justifyCenter,
                            cStyles.flexColumn,
                        ])}
                    >
                        <h4
                            className={join([
                                cStyles.colorGray,
                                styles.textMargin,
                            ])}
                        >
                            Novos cliente semana
                        </h4>
                        <h2
                            className={join([
                                cStyles.colorGreen,
                                styles.textMargin,
                            ])}
                        >
                            1231233
                        </h2>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <PageBlock
                title="Clientes prospectos"
                subtitle="Informações sobre potenciais clientes"
                variation="full"
            >
                {renderHeader()}
                {/* {prospects !== null ? renderProspectsTable() : renderNotFound()} */}
            </PageBlock>
        </Layout>
    )
}

export default AdminLeads
