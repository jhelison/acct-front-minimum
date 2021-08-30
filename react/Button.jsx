import React from 'react'
import styles from './ContactsForm.css'

const Button = ({title}) => {
  return (
    <div className={styles.containerBasicButton}>
      <button type="button" className={styles.basicButton}>
          {title}
      </button>
    </div>
  )
}

export default Button