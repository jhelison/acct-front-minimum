import React, {useState , FormData} from 'react'
import styleModule from './style.module.css'

const LeadsForm = () => {

  var form = new FormData(document.getElementById('lead-form'));
  const insertProspect = async (e) => {
      e.preventDefault();
      console.log("/_v/lead/")
      try {
          const res = await fetch(
              "/_v/lead/" ,
              {
                  method: "put",
                  body: form
              }
          )
      } catch (error) {
          console.log(error)
      }
  }

  return (
        <form id="lead-form" className={styleModule.leadsForm} method="post" onSubmit={insertProspect(e)}>
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
