import React, { useContext } from 'react'
import {myContext} from '../../Context'
import '../../GlobalStyles.css'
import { IUser } from '../../types/maintypes'
import HomeCSS from './Home.module.css'
import Spotlight from './spotlight/Spotlight'

function Home() {
	const context = useContext(myContext) as IUser
	return (
		<div className={HomeCSS.home}>
			<div className={HomeCSS.top}>
				<div className={HomeCSS.mainPoster}></div>
				<a className={HomeCSS.topBtn} href='/register'>
					{
						context ? <p>Welcome back {context.username}</p>
						: <p>Begin your story {'>'}</p>
					}
					
				</a>
			</div>

			<Spotlight />
      
		</div>
	)
}

export default Home
