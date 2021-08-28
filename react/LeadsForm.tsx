import React from 'react'
import styleModule from './style.module.css'

const LeadsForm = () => {

  return (
        <form className={styleModule.form}>
          <div className={styleModule.row}>
            <h3 className={styleModule.leadsFormTitle}>Fale com a gente!</h3>
          </div>

          <div className={styleModule.row}>
            <div className={styleModule.half}>
              <label className={styleModule.leadsLabel}>Nome</label>
              <input className={styleModule.leadsFormInput} type="text"/>
            </div>

            <div className={styleModule.half}>
              <label className={styleModule.leadsLabel}>E-mail</label>
              <input className={styleModule.leadsFormInput} type="text"/>
            </div>
          </div>

          <div className={styleModule.row}>
            <input type="submit" value="Enviar" className={styleModule.leadsFormSubmit}/>
          </div>
        </form>
  )
}

export default LeadsForm