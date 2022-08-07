import React, { useContext } from 'react'
import { myContext } from '../../Context'
import '../../GlobalStyles.css'
import { IUser } from '../../types/maintypes'
import styles from './Home.module.css'
import Spotlight from './spotlight/Spotlight'

function Home() {
	const context = useContext(myContext) as IUser
	return (
		<div className={styles.home}>
			<div className={styles.top}>
					<div className={styles.mainPoster}></div>
				<a className={styles.topBtn} href='/register'>
					{context ? (
						<p>Welcome back {context.username}</p>
					) : (
						<p>Begin your story {'>'}</p>
					)}
				</a>
			</div>

			<Spotlight />
		</div>
	)
}

export default Home
