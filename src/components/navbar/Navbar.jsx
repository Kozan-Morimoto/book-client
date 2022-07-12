import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes as faX } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import './Navbar.css'

function NavBar() {
	return (
		<div className='navbar'>
			<div className='bar'>
				<div className='logo'>Logo</div>

				<button className='toggle-a' id='toggle-a'>
					<FontAwesomeIcon icon={faBars} className='fa-bars' />
				</button>
			</div>
			<nav className='nav' id='nav'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a href='#'>Home</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Explore</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Contact</a>
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
