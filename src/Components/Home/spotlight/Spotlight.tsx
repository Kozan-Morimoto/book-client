import React from 'react'
import SpotlightCSS from './Spotlight.module.css'
import kingsRespiteCover from '../../../assets/kings-respite-cover.jpg'

function Spotlight() {
  return (
    <div className={SpotlightCSS.spotlight}>
        <h1>SPOTLIGHT</h1>
        <hr />
        <div className={SpotlightCSS.card}>
            <h3 className={SpotlightCSS.cardTitle}>
                The King's Respite
            </h3>
            <img src={kingsRespiteCover} alt="Cover" className={SpotlightCSS.cardCover}/>
        </div>
    </div>
  )
}

export default Spotlight