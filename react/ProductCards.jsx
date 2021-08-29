import React from "react"
import styles from "./ProductCards.css"

import { RiRocketLine } from "react-icons/ri"
import { FiAlertCircle } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"
import { FiX } from "react-icons/fi"

const ProductCards = (props) => {
    return (
        <div className={styles.mainProductCardContainer}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

const ProductCard = (props) => {
    return (
        <div className={styles.productCard}>
            <RiRocketLine
                className={styles.marginBottom}
                size={60}
                color="#fcc200"
            />
            <h2>Starter</h2>
            <span className={styles.subTitle}>
                Gestão e consulta de NFes e CTes para até 3 CNPJs
            </span>
            <span className={styles.subTitlePrice}>A partir de</span>
            <label className={styles.pricing}>R$ 39,90</label>
            <span className={styles.subTitlePrice}>Por més</span>
            <button className={styles.productCardBuyButton}>
                Assinar agora
            </button>
            <span className={styles.productCaracteristics}>
                Principais recursos
            </span>
            <ProductCaracteristic label="Estudo de Conversão" status={true} />
            <ProductCaracteristic label="Elaboração de Dashboard" status={true} />
            <ProductCaracteristic label="Participações em discussões de estratégia" status={true} />
            <ProductCaracteristic label="Mensuração do cenário de CRO" status={true} />
            <ProductCaracteristic label="Configuração do Analytics" status={true} />
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
