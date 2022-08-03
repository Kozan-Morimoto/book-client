import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes as faX } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

function NavBar() {
	return (
		<div className='navbar'>
			<div className='bar'>
				<a href="/"><div className='logo'>Logo</div></a>

				<button className='toggle-a' id='toggle-a'>
					<FontAwesomeIcon icon={faBars} className='fa-bars' />
				</button>
			</div>
			<nav className='nav' id='nav'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a href='/'>Home</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Explore</a>
					</li>
					<li className='nav-item'>
						<a href='/login'>Login</a>
					</li>

					<button className='toggle-b' id='toggle-b'>
						<FontAwesomeIcon icon={faX} className='fa-times' />
					</button>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar
