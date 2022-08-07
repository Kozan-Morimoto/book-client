import React from 'react'
import { Link } from 'react-router-dom'
import NavBarCSS from './NavBar.module.css'

function NavBar() {
	return (
		<nav className={NavBarCSS.navBar}>
			<ul>
				<span><Link to='/'>Logo</Link></span>
				
				<li><Link to='#'>Explore</Link></li>
				<li><Link to='/login'>Login</Link></li>
			</ul>
		</nav>
	)
}

export default NavBar
