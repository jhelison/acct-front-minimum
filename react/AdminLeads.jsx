import React, { useEffect, useState } from "react"
import { Layout, PageBlock } from "vtex.styleguide"

import styles from "./AdminLeads.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

import { FiUsers } from "react-icons/fi"
import { FiUserPlus } from "react-icons/fi"
import { FiCheckCircle } from "react-icons/fi"
import { FiSearch } from "react-icons/fi"
import { FiDownload } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"

const AdminLeads = () => {
    const [prospects, setProspects] = useState(null)

    useEffect(() => {
        getProspects()
    }, [])

    const getProspects = async () => {
        try {
            const res = await fetch(
                "https://mariavitoria--hiringcoders202119.myvtex.com/_v/leads"
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
            <div className={styles.tableWrapper}>
                <table className={join([cStyles.width100, cStyles.mt20, styles.CustomTable])}>
                    <tbody>
                        <tr  className={cStyles.mb10}>
                            <th className={join([cStyles.textLeft, cStyles.openSansCondensed, cStyles.mediumText])} >Nome</th>
                            <th className={join([cStyles.textLeft, cStyles.openSansCondensed, cStyles.mediumText])}>Telefone</th>
                            <th className={join([cStyles.textLeft, cStyles.openSansCondensed, cStyles.mediumText])}>Status</th>
                            <th className={join([cStyles.textLeft, cStyles.openSansCondensed, cStyles.mediumText])}>Cadastrado em</th>
                            <th className={join([cStyles.textLeft, cStyles.openSansCondensed, cStyles.mediumText])}>Cliente em</th>
                            <th className={join([cStyles.textLeft, cStyles.openSansCondensed, cStyles.mediumText])}>Ações</th>
                        </tr>
                        {renderProspectsItems()}
                    </tbody>
                </table>
            </div>
        )
    }

    const renderProspectsItems = () => {
        const getStatus = () => {

        }

        return prospects.map((item) => {
            return (
                <tr key={item.id}>
                    <td className={join([cStyles.pr15, cStyles.pb5])}>
                        <div className={join([cStyles.dFlex, cStyles.justifyStart, cStyles.flexColumn])}>
                            <p className={join([cStyles.m0, cStyles.openSansCondensed])}><b>{item.name}</b></p>
                            <a className={join([cStyles.colorGray])} href ={"mailto: " + item.email}>{item.email}</a>
                        </div>
                    </td>
                    <td className={join([cStyles.pr15, cStyles.pb5])}>{item.fone}</td>
                    <td className={join([cStyles.pr15, cStyles.pb5])}>{item.status}</td>
                    <td className={join([cStyles.pr15, cStyles.pb5])}>{item.createdAt}</td>
                    <td className={join([cStyles.pr15, cStyles.pb5])}>{item.customerAt}</td>
                    <td className={join([cStyles.dFlex, cStyles.flexCenter])}
                    >
                        <button
                            style={{
                                border: "none",
                                backgroundColor: "rgba(0,0,0,0)",
                                cursor: "pointer",
                            }}
                            onClick={() => deleteProspect(item.id)}
                        >
                            <FiTrash2 color="#de5d5d" size={20}/>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    const renderHeader = () => {
        return (
            <div>
                <div className={styles.headerContainer}>
                    <div className={styles.headerCardContainer}>
                        <div
                            className={join([
                                cStyles.dFlex,
                                cStyles.flexCenter,
                            ])}
                        >
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
                                    cStyles.openSansCondensed,
                                    styles.textMargin,
                                ])}
                            >
                                Total de prospectos
                            </h4>
                            <h2
                                className={join([
                                    cStyles.colorYellow,
                                    cStyles.openSansCondensed,
                                    styles.textMargin,
                                ])}
                            >
                                1231233
                            </h2>
                        </div>
                    </div>
                    <div className={styles.headerCardContainer}>
                        <div
                            className={join([
                                cStyles.dFlex,
                                cStyles.flexCenter,
                            ])}
                        >
                            <FiUserPlus
                                size={30}
                                className={cStyles.colorGray}
                            />
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
                                    cStyles.openSansCondensed,
                                    styles.textMargin,
                                ])}
                            >
                                Prospectos na semana
                            </h4>
                            <h2
                                className={join([
                                    cStyles.colorYellow,
                                    cStyles.openSansCondensed,
                                    styles.textMargin,
                                ])}
                            >
                                1231233
                            </h2>
                        </div>
                    </div>
                    <div className={styles.headerCardContainer}>
                        <div
                            className={join([
                                cStyles.dFlex,
                                cStyles.flexCenter,
                            ])}
                        >
                            <FiCheckCircle
                                size={30}
                                className={cStyles.colorPastelGreen}
                            />
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
                                    cStyles.openSansCondensed,
                                    styles.textMargin,
                                ])}
                            >
                                Novos clientes na semana
                            </h4>
                            <h2
                                className={join([
                                    cStyles.colorYellow,
                                    cStyles.openSansCondensed,
                                    styles.textMargin,
                                ])}
                            >
                                1231233
                            </h2>
                        </div>
                    </div>
                </div>

                <div className={join([cStyles.dFlex, cStyles.flexRow])}>
                    <form
                        className={join([
                            cStyles.dFlex,
                            cStyles.flexColumn,
                            cStyles.mt20,
                            cStyles.mr10,
                            styles.searchForm,
                        ])}
                    >
                        <label htmlFor="emailId">Email para pesquisa</label>
                        <div
                            className={join([
                                styles.customInput,
                                cStyles.dFlex,
                                cStyles.flexCenter,
                                cStyles.mt10,
                            ])}
                        >
                            <input id={"emailId"} placeholder="Email"></input>
                            <div
                                className={join([
                                    cStyles.dFlex,
                                    cStyles.flexCenter,
                                    cStyles.mr10,
                                ])}
                            >
                                <FiSearch className={cStyles.colorGray} />
                            </div>
                        </div>
                    </form>
                    <div
                        className={join([
                            cStyles.dFlex,
                            cStyles.flexCenter,
                            styles.exportButton,
                        ])}
                    >
                        <FiDownload size={25} className={join([cStyles.colorPastelGreen, cStyles.mr10])} />
                        <label>Exportar dados em csv</label>
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
                {prospects !== null ? renderProspectsTable() : renderNotFound()}
            </PageBlock>
        </Layout>
    )
}

export default AdminLeads
