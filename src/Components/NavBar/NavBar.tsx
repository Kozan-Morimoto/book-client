import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes as faX } from '@fortawesome/free-solid-svg-icons'
import NavBarCSS from './NavBar.module.css'

function NavBar() {
	return (
		<div className={NavBarCSS.navBar}>
			<div className={NavBarCSS.bar}>
				<a href="/"><div className={NavBarCSS.logo}>Logo</div></a>

				<button className={NavBarCSS.toggleA} id='toggle-a'>
					<FontAwesomeIcon icon={faBars} className={NavBarCSS.faBars} />
				</button>
			</div>
			<nav className={NavBarCSS.nav} id='nav'>
				<ul className={NavBarCSS.navList}>
					<li className={NavBarCSS.navItem}>
						<a href='/'>Home</a>
					</li>
					<li className={NavBarCSS.navItem}>
						<a href='/'>Explore</a>
					</li>
					<li className={NavBarCSS.navItem}>
						<a href='/login'>Login</a>
					</li>

					<button className={NavBarCSS.toggleB} id='toggle-b'>
						<FontAwesomeIcon icon={faX} className={NavBarCSS.faTimes} />
					</button>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar
