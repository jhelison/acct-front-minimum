import React from "react"
import styles from "./ProductCards.css"

import { FiAlertCircle } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"
import { FiX } from "react-icons/fi"

import { FiActivity } from "react-icons/fi"
import { FiCloudDrizzle } from "react-icons/fi"
import { FiCommand } from "react-icons/fi"



const testData = [
    {
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
    return (
        <div className={styles.mainProductCardContainer}>
            {testData.map((item) => {
                return <ProductCard {...item} />
            })}
        </div>
    )
}

const ProductCard = ({ title, description, price, caracteristics, Icon }) => {
    return (
        <div className={styles.productCard}>
            <Icon
                className={styles.marginBottom}
                size={60}
                color="#fcc200"
            />
            <h2>{title}</h2>
            <div
                style={{
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span className={styles.subTitle}>{description}</span>
            </div>
            <span className={styles.subTitlePrice}>A partir de</span>
            <label className={styles.pricing}>{"R$ " + price}</label>
            <span className={styles.subTitlePrice}>Por mês</span>
            <button className={styles.productCardBuyButton}>
                Assinar agora
            </button>
            <span className={styles.productCaracteristics}>
                Principais recursos
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
            <FiCheck color="green" size={baseSize} />
        ) : (
            <FiX color="red" size={baseSize} />
        )
    }

    return (
        <div className={styles.caracContainer}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <FiAlertCircle color="darkgray" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span className={styles.caracLabel}>{label}</span>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {getIcon()}
            </div>
        </div>
    )
}

export default ProductCards
