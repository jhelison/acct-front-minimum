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
          </div>
        </div>
        <div className={styleModule.serviceItem}>
          <img src="https://acct.global/wp-content/uploads/2020/11/flip-growth.jpg"></img>
          <h2 className={styleModule.serviceTitle}>Growth e Data</h2>
          <div className={styleModule.serviceContent}>
              <h2>Growth e Data</h2>
              <p>Processo de coleta, organização, descrição, análise e interpretação de dados pode fornecer aos tomadores de decisão as informações necessárias para prever o futuro.</p>
          </div>
        </div>
        <div className={styleModule.serviceItem}>
          <img src="https://acct.global/wp-content/uploads/2020/11/flip-exp-design.jpg"></img>
          <h2 className={styleModule.serviceTitle}>Experience Design</h2>
          <div className={styleModule.serviceContent}>
              <h2>Experience Design</h2>
              <p>Experiência do usuário como ferramenta estratégica de negócios, para você aplicar aos seus projetos e processos de forma inteligente.</p>
          </div>
        </div>
        <div className={styleModule.serviceItem}>
          <img src="https://acct.global/wp-content/uploads/2020/11/flip-tecnology.jpg"></img>
          <h2 className={styleModule.serviceTitle}>Tecnologia</h2>
          <div className={styleModule.serviceContent}>
              <h2>Tecnologia</h2>
              <p>Uma empresa com as melhores práticas de desenvolvimento, soluções digitais e implementações de plataformas, com especialização em e-commerce.</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Services