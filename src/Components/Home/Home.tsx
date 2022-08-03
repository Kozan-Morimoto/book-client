import React from 'react'
import './Home.css'
import Spotlight from './spotlight/Spotlight'

function Home() {
	return (
		<div className='home'>
			<div className='top'>
				<div className='main-poster'></div>
				<a className='top-btn' href='#'>
					Begin your story {'>'}
				</a>
			</div>

			<Spotlight />
      
		</div>
	)
}

export default Home
