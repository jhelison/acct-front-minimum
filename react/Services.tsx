import React from 'react'
import styleModule from './style.module.css'

const Services = () => {
  return (
    <a className={styleModule.services} href="/products">
      <div className={styleModule.servicesContainer}>
        <div className={styleModule.serviceItem}>
          <img src="https://acct.global/wp-content/uploads/2020/11/flip-delivery-squads.jpg"></img>
          <h2 className={styleModule.serviceTitle}>Quality Assurance</h2>
          <div className={styleModule.serviceContent}>
            <h2>Quality Assurance</h2>
            <p>Um sistema de garantia de qualidade que tem como objetivo aumentar a confiança e a credibilidade de produtos, processos e serviços.</p>
            <a>Saiba mais</a>
          </div>
        </div>
        <div className={styleModule.serviceItem}>
          <img src="https://acct.global/wp-content/uploads/2020/11/flip-growth.jpg"></img>
          <h2 className={styleModule.serviceTitle}>Growth e Data</h2>
          <div className={styleModule.serviceContent}>
            <h2>Growth e Data</h2>
            <p>Processo de coleta, organização, descrição, análise e interpretação de dados pode fornecer aos tomadores de decisão as informações necessárias para prever o futuro.</p>
            <a>Saiba mais</a>
          </div>
        </div>
        <div className={styleModule.serviceItem}>
          <img src="https://acct.global/wp-content/uploads/2020/11/flip-exp-design.jpg"></img>
          <h2 className={styleModule.serviceTitle}>Experience Design</h2>
          <div className={styleModule.serviceContent}>
            <h2>Experience Design</h2>
            <p>Experiência do usuário como ferramenta estratégica de negócios, para você aplicar aos seus projetos e processos de forma inteligente.</p>
            <a>Saiba mais</a>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Services