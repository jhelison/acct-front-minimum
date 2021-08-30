import React, { useEffect, useState } from "react"
import styles from "./ProductCards.css"
import cStyles from "./CommonStyles.css"

import { join } from "./util"

import { FiAlertCircle } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"
import { FiX } from "react-icons/fi"

const ProductCards = ({ categoryId }) => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getItems()
    }, [])

    const formatSpecifications = (specifications) => {
        let groups = {}

        const parseSpecValue = (specValue) => {
            if (specValue === "false") {
                return false
            } else if (specValue === "true") {
                return true
            }
            return specValue
        }

        specifications.forEach((item) => {
            if (!Object.keys(groups).includes(item.fieldGroupName)) {
                groups[item.fieldGroupName] = []
            }

            groups[item.fieldGroupName].push({
                fieldGroupName: item.fieldGroupName,
                description: item.description,
                specName: item.specName,
                specValue: parseSpecValue(item.specValue[0]),
            })
        })

        return groups
    }

    const getItems = async () => {
        const res = await fetch(`/_v/products/${categoryId}`)
        const resJson = await res.json()

        if (resJson) {
            const productsSorted = sortItemsByPrice(resJson)
            setProducts(productsSorted)
        }
    }

    const sortItemsByPrice = (items) => {
        return items.sort((a, b) => {
            return a.skus[0].skuBestPrice - b.skus[0].skuBestPrice
        })
    }

    const renderProducts = () => {
        if (products) {
            return products.map((product) => {
                return (
                    <ProductCard
                        key={product.Id}
                        title={product.Name}
                        description={product.Description}
                        price={product.skus[0].skuBestPriceFormated}
                        specifications={formatSpecifications(
                            product.specifications
                        )}
                        skuImage={product.skus[0].skuImage}
                    />
                )
            })
        }
    }

    const productsOrLoader = () => {
        if (products === null) {
            return <CustomLoader />
        }
        return renderProducts()
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
    specifications,
    skuImage,
    key,
}) => {
    const goToAddToCartLink = async (productName) => {
        const res = await fetch(`/api/catalog_system/pub/products/search/${productName}`)
        const resJson = await res.json()

        if(resJson.length){
            window.location.href = resJson[0].items[0].sellers[0].addToCartLink
        }
    }
    
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
            <img src={skuImage} alt={title} className={styles.imgIcon} />
            <div
                className={join([
                    cStyles.dFlex,
                    cStyles.flexCenter,
                    cStyles.height60,
                ])}
            >
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
            <label
                className={join([
                    cStyles.colorYellow,
                    cStyles.textCenter,
                    cStyles.openSansCondensed,
                ])}
            >
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
            <a
                className={join([
                    styles.productCardBuyButton,
                    cStyles.bgYellow,
                    cStyles.mt20,
                    cStyles.mb40,
                    cStyles.dFlex,
                    cStyles.flexCenter,
                    cStyles.openSansCondensed,
                ])}
                onClick={() => goToAddToCartLink(title)}
            >
                Assinar
            </a>

            {Object.keys(specifications).map((sectionName) => {
                return (
                    <ProductCatacteristicSection
                        key={sectionName}
                        specifications={specifications[sectionName]}
                    />
                )
            })}
        </div>
    )
}

const ProductCatacteristicSection = ({ specifications, key }) => {
    return (
        <div
            key={key}
            className={join([
                cStyles.dFlex,
                cStyles.mt20,
                cStyles.flexComumn,
                cStyles.width100,
            ])}
        >
            <span
                className={join([
                    cStyles.selfFlexStart,
                    cStyles.colorDarkGray,
                    cStyles.mb10,
                    cStyles.openSansCondensed,
                    cStyles.textUpper,
                ])}
            >
                <b>{specifications[0].fieldGroupName}</b>
            </span>
            {specifications.map((specs) => {
                return (
                    <ProductCaracteristic
                        key={specs.specName}
                        label={specs.specName}
                        status={specs.specValue}
                        toolTip={specs.description}
                    />
                )
            })}
        </div>
    )
}

const ProductCaracteristic = ({ label, status, toolTip, key }) => {
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
                <IconWithToolTip toolTip={toolTip}/>
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
    return <div className={styles.ldsDourglass}></div>
}

const IconWithToolTip = ({ toolTip }) => {
    return (
        <div className={styles.tooltip}>
            <FiAlertCircle className={cStyles.colorDarkGray}/>
            <span className={styles.tooltiptext}>{toolTip}</span>
        </div>
    )
}

export default ProductCards
