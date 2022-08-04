import React from 'react'
import '../../GlobalStyles.css'
import HomeCSS from './Home.module.css'
import Spotlight from './spotlight/Spotlight'

function Home() {
	return (
		<div className={HomeCSS.home}>
			<div className={HomeCSS.top}>
				<div className={HomeCSS.mainPoster}></div>
				<a className={HomeCSS.topBtn} href='#'>
					Begin your story {'>'}
				</a>
			</div>

			<Spotlight />
      
		</div>
	)
}

export default Home
