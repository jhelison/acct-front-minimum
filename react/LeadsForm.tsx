import React from 'react'
import styleModule from './style.module.css'

const LeadsForm = () => {

  return (
        <form className={styleModule.leadsForm} method="post">
          <div className={styleModule.leadsRow}>
            <h3 className={styleModule.leadsFormTitle}>Fale com a gente!</h3>
          </div>

          <div className={styleModule.leadsRow}>
              <input className={styleModule.leadsFormInput} type="text" placeholder="Nome*"/>
          </div>

          <div className={styleModule.leadsRow}>
              <input className={styleModule.leadsFormInput} type="e-mail" placeholder="E-mail*"/>
          </div>

          <div className={styleModule.leadsRow}>
            <input type="submit" value="Enviar" className={styleModule.leadsFormSubmit}/>
          </div>
        </form>
  )
}

export default LeadsForm
