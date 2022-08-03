import React from 'react'
import './Spotlight.css'
import kingsRespiteCover from '../../../assets/kings-respite-cover.jpg'

function Spotlight() {
  return (
    <div className='spotlight'>
        <h1>SPOTLIGHT</h1>
        <hr />
        <div className='card'>
            <h3 className='card-title'>
                The King's Respite
            </h3>
            <img src={kingsRespiteCover} alt="Cover" className='card-cover'/>
        </div>
    </div>
  )
}

export default Spotlight