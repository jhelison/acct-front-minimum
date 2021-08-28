import React from 'react'
import styleModule from './style.module.css'

interface BannerProps {
  title: String,
  urlImage: String
}

const Banner: StorefrontFunctionComponent<BannerProps> = ({title, urlImage}:BannerProps) => {
  return (
    <div className={styleModule.contactsContainerBanner} style={{backgroundImage: `url(${urlImage})`}}>
      <div className={styleModule.contactsContentBanner}>
        <h1 className={styleModule.contactsBannerTitle}>
          {title+" "}
          <span className={styleModule.blink}>_</span>
        </h1>
      </div>
    </div>
  )
}

export default Banner