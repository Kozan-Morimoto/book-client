import React, { useState } from 'react'
import styles from './LoginRegister.module.css'
import '../../GlobalStyles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons'
import Axios from 'axios'

function Register() {
	const [registerUsername, setRegisterUsername] = useState('')
	const [registerPassword, setRegisterPassword] = useState('')

	const register = () => {
		Axios({
			method: 'POST',
			data: {
				username: registerUsername,
				password: registerPassword
			},
			withCredentials: true,
			url: 'https://blockchain-monogatary-server.herokuapp.com/auth/register',
		}).then((res) => console.log(res))
	}

	const googleRegister = () => {
		window.open('https://blockchain-monogatary-server.herokuapp.com/auth/google', '_self')
	}
	const githubRegister = () => {
		window.open('https://blockchain-monogatary-server.herokuapp.com/auth/github', '_self')
	}

	return (
		<div className={styles.loginRegister}>
			<div className={styles.greeting}>
				<h1>Begin your legend.</h1>
			</div>
			<div className={styles.inputContainer}>
				<div>
					<input
						type='username'
						name='username'
						id='username'
						placeholder='Username'
						onChange={(e) => setRegisterUsername(e.target.value)}
						required
					/>
				</div>

				<div>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						onChange={(e) => setRegisterPassword(e.target.value)}
						required
					/>
				</div>

				{/* REPEAT PASSWORD FIELD
				<div>
					<input
						type='password'
						name='password-confirm'
						id='password-confirm'
						placeholder='Repeat password'
						required
					/>
				</div>
				*/}

				<button className={styles.btn} onClick={register}>Register</button>
			</div>
			<div className={styles.OAuthContainer}>
				<div className={`${styles.googleBtn} ${styles.OAuthBtn}`} onClick={googleRegister}>
					<FontAwesomeIcon icon={faGoogle} className={styles.OAuthBrand} />
					<p>Register with Google</p>
				</div>
				<div className={`${styles.githubBtn} ${styles.OAuthBtn}`} onClick={githubRegister}>
					<FontAwesomeIcon icon={faGithub} className={styles.OAuthBrand} />
					<p>Register with GitHub</p>
				</div>
			</div>
			<div className={styles.link}>
				<a href='/login'>
					<u>Login</u>
				</a>
			</div>
		</div>
	)
}

export default Register
