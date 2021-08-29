import React from 'react'
import styles from './ContactsForm.css'

const ContactsForm = () => {

  return (
        <form className={styles.form}>
          <div className={styles.row}>
            <h3 className={styles.contactsFormTitle}>Solicite nosso contato:</h3>
          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.contactsLabel}>Nome*</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>

            <div className={styles.half}>
              <label className={styles.contactsLabel}>E-mail*</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.contactsLabel}>Telefone*</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>

            <div className={styles.half}>
              <label className={styles.contactsLabel}>País*</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.contactsLabel}>Empresa*</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>

            <div className={styles.half}>
              <label className={styles.contactsLabel}>Cargo</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>
          </div>
              
          <div className={styles.row}>
            <div className={styles.half}>
              <label className={styles.contactsLabel}>Numero de colaboradores</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>

            <div className={styles.half}>
              <label className={styles.contactsLabel}>Url do site</label>
              <input className={styles.contactsFormInput} type="text"/>
            </div>
          </div>
          
          <div className={styles.row}>
            <label className={styles.contactsLabel}>Como podemos ajudar?</label>
          </div>
          <div className={styles.row}>
            <textarea className={styles.contactsFormTextarea}/>
          </div>

          <div className={styles.row}>
            <input type="submit" value="Enviar" className={styles.contactsFormSubmit}/>
          </div>
        </form>
  )
}

export default ContactsForm