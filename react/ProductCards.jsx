import React, { useEffect } from "react"
import styles from "./ProductCards.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

import { FiAlertCircle } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"
import { FiX } from "react-icons/fi"

import { FiActivity } from "react-icons/fi"
import { FiCloudDrizzle } from "react-icons/fi"
import { FiCommand } from "react-icons/fi"

const testData = [
    {
        id: "1",
        title: "CRO",
        description: "Data Analytics com foco em CRO",
        price: "349.99",
        Icon: FiActivity,
        caracteristics: [
            { label: "Estudo de Conversão", status: true },
            { label: "Elaboração de Dashboard", status: false },
            {
                label: "Participações em discussões de estratégia",
                status: false,
            },
            { label: "Configuração do Analytics", status: false },
        ],
    },
    {
        id: "2",
        title: "GOLIVE",
        description:
            "Acompanhar os principais ofensores e oportunidades do Funil",
        price: "549.99",
        Icon: FiCloudDrizzle,
        caracteristics: [
            { label: "Estudo de Conversão", status: true },
            { label: "Elaboração de Dashboard", status: true },
            {
                label: "Participações em discussões de estratégia",
                status: false,
            },
            { label: "Configuração do Analytics", status: true },
        ],
    },
    {
        id: "3",
        title: "TESTE AB",
        description:
            "Realizar Testes entre Layouts, Versões de Site, Landing Pages",
        price: "1099.99",
        Icon: FiCommand,
        caracteristics: [
            { label: "Estudo de Conversão", status: true },
            { label: "Elaboração de Dashboard", status: true },
            {
                label: "Participações em discussões de estratégia",
                status: true,
            },
            { label: "Configuração do Analytics", status: true },
        ],
    },
]

const ProductCards = (props) => {

    useEffect(() => {
        // fetch('/api/catalog_system/pub/products/search/').then(response => console.log(response)).then(data => console.log(data))
        fetch('/api/catalog/pvt/category/1').then(response => console.log(response)).then(data => console.log(data))
    }, [])

    return (
        <div
            className={join([
                styles.productCardsContainer,
                cStyles.dFlex,
                cStyles.flexCenter,
            ])}
        >
            {testData.map((item) => {
                return <ProductCard {...item} key={item.id} />
            })}
        </div>
    )
}

const ProductCard = ({ title, description, price, caracteristics, Icon, id }) => {
    return (
        <div
            key={id}
            className={join([
                styles.productCard,
                cStyles.dFlex,
                cStyles.alignCenter,
                cStyles.bgWhite,
            ])}
        >
            <Icon
                className={join([cStyles.mb20, cStyles.colorYellow])}
                size={60}
            />
            <h2>{title}</h2>
            <div
                className={join([
                    cStyles.height60,
                    cStyles.dFlex,
                    cStyles.flexCenter,
                ])}
            >
                <span className={join([cStyles.colorGray, cStyles.textCenter])}>
                    {description}
                </span>
            </div>
            <span
                className={join([
                    cStyles.colorGray,
                    cStyles.textCenter,
                    cStyles.smallText,
                ])}
            >
                A partir de
            </span>
            <label className={join([cStyles.colorYellow, cStyles.textCenter])}>
                R$ <b className={cStyles.bigText}>{price}</b>
            </label>
            <span
                className={join([
                    cStyles.colorGray,
                    cStyles.textCenter,
                    cStyles.smallText,
                ])}
            >
                Por mês
            </span>
            <button
                className={join([
                    styles.productCardBuyButton,
                    cStyles.bgYellow,
                    cStyles.mt20,
                    cStyles.mb40,
                ])}
            >
                Assinar
            </button>
            <span
                className={join([
                    cStyles.selfFlexStart,
                    cStyles.colorDarkGray,
                    cStyles.mb10,
                ])}
            >
                <b>Principais recursos</b>
            </span>
            {caracteristics.map((item) => {
                return (
                    <ProductCaracteristic
                        label={item.label}
                        status={item.status}
                    />
                )
            })}
        </div>
    )
}

const ProductCaracteristic = ({ label, status }) => {
    const getIcon = () => {
        const baseSize = 20
        return status ? (
            <FiCheck className={cStyles.colorGreen} size={baseSize} />
        ) : (
            <FiX className={cStyles.colorRed} size={baseSize} />
        )
    }

    return (
        <div className={styles.caracContainer}>
            <div className={join([cStyles.dFlex, cStyles.alignCenter])}>
                <FiAlertCircle className={cStyles.colorDarkGray} />
            </div>
            <div className={join([cStyles.dFlex, cStyles.alignCenter])}>
                <span className={cStyles.colorDarkGray}>{label}</span>
            </div>
            <div
                className={join([cStyles.dFlex, cStyles.flexCenter])}
            >
                {getIcon()}
            </div>
        </div>
    )
}

export default ProductCards
