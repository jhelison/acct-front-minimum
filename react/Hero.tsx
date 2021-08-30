import React from 'react'
import styleModule from './style.module.css'
import { animate } from './HeroAnimation.js'

const Hero = () => {

    animate()    

  return (
    <div className={styleModule.heroHome}>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
        <svg className={styleModule.heroSvg} id="lines" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 1080" preserveAspectRatio="none">
            <g className={styleModule.lines}>
            <rect className={styleModule.line} x="1253.6" width="4.5" height="1080"></rect>
            <rect className={styleModule.line} x="873.3" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="1100" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="1547.1" width="4.5" height="1080"></rect>
            <rect className={styleModule.line} x="615" width="4.5" height="1080"></rect>
            <rect className={styleModule.line} x="684.6" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="1369.4" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="1310.2" width="0.9" height="1080"></rect>
            <rect className={styleModule.line} x="1233.4" width="0.9" height="1080"></rect>
            <rect className={styleModule.line} x="124.2" width="0.9" height="1080"></rect>
            <rect className={styleModule.line} x="1818.4" width="4.5" height="1080"></rect>
            <rect className={styleModule.line} x="70.3" width="4.5" height="1080"></rect>
            <rect className={styleModule.line} x="1618.6" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="455.9" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="328.7" width="1.8" height="1080"></rect>
            <rect className={styleModule.line} x="300.8" width="4.6" height="1080"></rect>
            <rect className={styleModule.line} x="1666.4" width="0.9" height="1080"></rect>
            </g>
            <g className={styleModule.lights}>
                <path id="light1" className={styleModule.lights} d="M619.5,298.4H615v19.5h4.5V298.4z M619.5,674.8H615v9.8h4.5V674.8z M619.5,135.1H615v5.6h4.5V135.1z         M619.5,55.5H615v68.7h4.5V55.5z" data-svg-origin="615 55.5" transform="matrix(1,0,0,1,0,274.0799999999999)"></path>
                <path id="light2" className={styleModule.lights} d="M1258.2,531.9h-4.5v8.1h4.5V531.9z M1258.2,497.9h-4.5v17.9h4.5V497.9z M1258.2,0h-4.5v25.3h4.5V0z         M1258.2,252.2h-4.5v42.4h4.5V252.2z" data-svg-origin="1253.699951171875 0" transform="matrix(1,0,0,1,0,939.2072727272723)"></path>
                <path id="light3" className={styleModule.lights} d="M875.1,123.8h-1.8v4h1.8V123.8z M875.1,289.4h-1.8v24.1h1.8V289.4z M875.1,0h-1.8v31.4h1.8V0z M875.1,50.2         h-1.8v11.5h1.8V50.2z" data-svg-origin="873.2999877929688 0" transform="matrix(1,0,0,1,0,-187.164)"></path>
                <path id="light4" className={styleModule.lights} d="M1101.8,983.8h-1.8v8.2h1.8V983.8z M1101.8,1075.9h-1.8v4.1h1.8V1075.9z M1101.8,873.7h-1.8v4.2h1.8V873.7z         M1101.8,851h-1.8v18.2h1.8V851z" data-svg-origin="1100 851" transform="matrix(1,0,0,1,0,1049.328)"></path>
                <path id="light5" className={styleModule.lights} d="M686.4,822.7h-1.8v3.8h1.8V822.7z M686.4,928.4h-1.8v23h1.8V928.4z M686.4,1043.8h-1.8v36.2h1.8V1043.8z" data-svg-origin="684.6000366210938 822.7000122070312" transform="matrix(1,0,0,1,0,-299.07692307692264)"></path>
                <path id="light6" className={styleModule.lights} d="M1551.6,860.9h-4.4v-34.1h4.4V860.9z M1551.6,533.5h-4.4v-13.9h4.4V533.5z M1551.6,1080h-4.4v-89.1h4.4V1080z" data-svg-origin="1547.199951171875 519.5999755859375" transform="matrix(1,0,0,1,0,638.8200000000004)"></path>
                <path id="light7" className={styleModule.lights} d="M1311.1,707.7h-0.9V698h0.9V707.7z M1311.1,436.8h-0.9v-58.9h0.9V436.8z M1311.1,140.7h-0.9V48h0.9V140.7z" data-svg-origin="1310.199951171875 48" transform="matrix(1,0,0,1,0,687.8400000000001)"></path>
                <path id="light8" className={styleModule.lights} d="M125.1,514.5h-0.9v-9.7h0.9V514.5z M125.1,243.6h-0.9v-58.9h0.9V243.6z" data-svg-origin="124.19999694824219 184.70001220703125" transform="matrix(1,0,0,1,0,-173.3399999999998)"></path>
                <path id="light9" className={styleModule.lights} d="M305.4,806.7h-4.6v-42.5h4.6V806.7z M305.4,398.5h-4.6v-17.3h4.6V398.5z M305.4,1080h-4.6V968.8h4.6V1080z" data-svg-origin="300.79998779296875 381.20001220703125" transform="matrix(1,0,0,1,0,-802.6560000000004)"></path>
                <path id="light10" className={styleModule.lights} d="M1822.9,170.7h-4.5v13.7h4.5V170.7z M1822.9,435.1h-4.5v6.8h4.5V435.1z M1822.9,55.9h-4.5v4h4.5V55.9z         M1822.9,0h-4.5v48.3h4.5V0z" data-svg-origin="1818.4000244140625 0" transform="matrix(1,0,0,1,0,-87.96000000000004)"></path>
                <path id="light11" className={styleModule.lights} d="M1666.4,331.5h0.9v9.7h-0.9V331.5z M1666.4,602.4h0.9v58.9h-0.9V602.4z M1666.4,898.5h0.9v92.7h-0.9V898.5z" data-svg-origin="1666.4000244140625 331.5" transform="matrix(1,0,0,1,0,204.86769230769255)"></path>
                <path id="light12" className={styleModule.lights} d="M1620.4,200.7h-1.8v6.4h1.8V200.7z M1620.4,469.1h-1.8v39h1.8V469.1z M1620.4,0h-1.8v51h1.8V0z M1620.4,81.3         h-1.8V100h1.8V81.3z" data-svg-origin="1618.5999755859375 0" transform="matrix(1,0,0,1,0,708.5936842105266)"></path>
                <path id="light13" className={styleModule.lights} d="M74.8,201h-4.5v16.2h4.5V201z M74.8,512.3h-4.5v8.1h4.5V512.3z M74.8,65.8h-4.5v4.6h4.5V65.8z M74.8,0h-4.5         v56.8h4.5V0z" data-svg-origin="70.30000305175781 0" transform="matrix(1,0,0,1,0,-101.8799999999992)"></path>
                <path id="light14" className={styleModule.lights} d="M1371.2,655.3h-1.8v6.3h1.8V655.3z M1371.2,829.7h-1.8v37.9h1.8V829.7z M1371.2,1020.3h-1.8v59.7h1.8V1020.3z" data-svg-origin="1369.39990234375 655.2999877929688" transform="matrix(1,0,0,1,0,703.3292307692309)"></path>
                <path id="light15" className={styleModule.lights} d="M1234.3,898.1h-0.9v-4.9h0.9V898.1z M1234.3,762.5h-0.9v-29.5h0.9V762.5z M1234.3,614.4h-0.9v-46.4h0.9V614.4z         " data-svg-origin="1233.4000244140625 568" transform="matrix(1,0,0,1,0,295.05600000000027)"></path>
                <path id="light16" className={styleModule.lights} d="M457.7,1010.8h-1.8v-18.1h1.8V1010.8z M457.7,507.5h-1.8V398h1.8V507.5z" data-svg-origin="455.9000244140625 398" transform="matrix(1,0,0,1,0,730.2342857142858)"></path>
                <path id="light17" className={styleModule.lights} d="M330.5,170.7h-1.8v13.7h1.8V170.7z M330.5,435.1h-1.8v6.8h1.8V435.1z M330.5,55.9h-1.8v4h1.8V55.9z M330.5,0         h-1.8v48.3h1.8V0z" data-svg-origin="328.70001220703125 0" transform="matrix(1,0,0,1,0,953.9999999999995)"></path>
            </g>
        </svg>
    </div>
  )
}

export default Hero
