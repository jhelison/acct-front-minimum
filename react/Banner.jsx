import React from 'react'
import styles from './style.module.css'

import TextBlink from './TextBlink'

const Banner = ({title, urlImage}) => {
  return (
    <div className={styles.contactsContainerBanner} style={{backgroundImage: `url(${urlImage})`}}>
      <div className={styles.contactsContentBanner}>
        <TextBlink text={title} white/>
      </div>
    </div>
  )
}

export default Banner