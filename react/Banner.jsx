import React from 'react'
import styles from './ContactsForm.css'

const Banner = ({title, urlImage}) => {
  return (
    <div className={styles.contactsContainerBanner} style={{backgroundImage: `url(${urlImage})`}}>
      <div className={styles.contactsContentBanner}>
        <h1 className={styles.contactsBannerTitle}>
          {title+" "}
          <span className={styles.blink}>_</span>
        </h1>
      </div>
    </div>
  )
}

export default Banner