import React, { useEffect, useState } from "react"
import styles from "./ProductCards.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

import { FiAlertCircle } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"
import { FiX } from "react-icons/fi"

const caracteristics = [
    { label: "Estudo de Conversão", status: true },
    { label: "Elaboração de Dashboard", status: false },
    {
        label: "Participações em discussões de estratégia",
        status: false,
    },
    { label: "Configuração do Analytics", status: false },
]

const ProductCards = ({ categoryId }) => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getItems()
    }, [])

    const getItems = async () => {
        const res = await fetch("/api/catalog_system/pub/products/search/")
        const resJson = await res.json()

        if (resJson) {
            const productsOnSection = filterItemsByCategory(resJson)
            setProducts(sortItemsByPrice(productsOnSection))
        }
    }

    const filterItemsByCategory = (items) => {
        return items.filter((value) => {
            return value.categoryId === String(categoryId)
        })
    }

    const sortItemsByPrice = (items) => {
        return items.sort((a, b) => {
            return (
                a.items[0].sellers[0].commertialOffer.Price -
                b.items[0].sellers[0].commertialOffer.Price
            )
        })
    }

    
    const renderProducts = () => {
        if (products) {
            return products.map((product) => {
                return (
                    <ProductCard
                    key={product.productId}
                    title={product.productName}
                    description={product.description}
                    price={
                        product.items[0].sellers[0].commertialOffer.Price
                    }
                    caracteristics={caracteristics}
                    img={product.items[0].images[0]}
                    toCartLink={product.items[0].sellers[0].addToCartLink}
                    />
                    )
                })
            }
        }

        const productsOrLoader = () => {
            if(products === null) {
                return (
                    <CustomLoader/>
                )
            }
            return (
                renderProducts()
            )
        }
        
        return (
        <div
            className={join([
                styles.productCardsContainer,
                cStyles.dFlex,
                cStyles.flexCenter,
            ])}
        >
            {productsOrLoader()}
        </div>
    )
}

const ProductCard = ({
    title,
    description,
    price,
    caracteristics,
    img,
    key,
    toCartLink,
}) => {
    return (
        <div
            key={key}
            className={join([
                styles.productCard,
                cStyles.dFlex,
                cStyles.alignCenter,
                cStyles.bgWhite,
            ])}
        >
            <img
                src={img.imageUrl}
                alt={img.imageLabel}
                className={styles.imgIcon}
            />
            <div className={join([cStyles.dFlex, cStyles.flexCenter, cStyles.height60])}>
                <h2 className={join([cStyles.textCenter])}>{title}</h2>
            </div>
            <div
                className={join([
                    cStyles.height100,
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
                R$ <b className={cStyles.bigText}>{price.toFixed(2)}</b>
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
            <a
                className={join([
                    styles.productCardBuyButton,
                    cStyles.bgYellow,
                    cStyles.mt20,
                    cStyles.mb40,
                    cStyles.dFlex,
                    cStyles.flexCenter,
                ])}
                href={toCartLink}
            >
                Assinar
            </a>
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
                        key={item.label}
                        label={item.label}
                        status={item.status}
                    />
                )
            })}
        </div>
    )
}

const ProductCaracteristic = ({ label, status, key }) => {
    const getIcon = () => {
        const baseSize = 20
        return status ? (
            <FiCheck className={cStyles.colorGreen} size={baseSize} />
        ) : (
            <FiX className={cStyles.colorRed} size={baseSize} />
        )
    }

    return (
        <div className={styles.caracContainer} key={key}>
            <div className={join([cStyles.dFlex, cStyles.alignCenter])}>
                <FiAlertCircle className={cStyles.colorDarkGray} />
            </div>
            <div className={join([cStyles.dFlex, cStyles.alignCenter])}>
                <span className={cStyles.colorDarkGray}>{label}</span>
            </div>
            <div className={join([cStyles.dFlex, cStyles.flexCenter])}>
                {getIcon()}
            </div>
        </div>
    )
}

const CustomLoader = (props) => {
    return (
        <div className={styles.ldsDourglass}></div>
    )
}

export default ProductCards
