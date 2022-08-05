import React, { useState } from 'react'
import styles from './LoginRegister.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons'
import Axios from 'axios'

function Login() {
	const [loginUsername, setLoginUsername] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [data, setData] = useState(null)

	const googleLogin = () => {
		window.open('http://localhost:5000/auth/google', '_self')
	}
	const githubLogin = () => {
		window.open('http://localhost:5000/auth/github', '_self')
	}

	const login = () => {
		Axios({
			method: 'POST',
			data: {
				username: loginUsername,
				password: loginPassword,
			},
			withCredentials: true,
			url: 'http://localhost:5000/auth/login',
		}).then((res) => console.log(res))
	}
	const getUser = () => {
		Axios({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:5000/user',
		}).then((res) => {
			console.log(res.data)
			setData(res.data)
		})
	}

	const logout = () => {
		Axios({
			method: 'POST',
			withCredentials: true,
			data: {
				loggedIn: true
			},
			url: 'http://localhost:5000/auth/logout'
		}).then(res => console.log('Logged out'))
	}

	return (
		<div className={styles.loginRegister}>
			<div className={styles.greeting}>
				<h1>Continue your legend.</h1>
			</div>

			<div className={styles.inputContainer}>
				<div>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='Username'
						onChange={(e) => setLoginUsername(e.target.value)}
						required
					/>
				</div>

				<div>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						onChange={(e) => setLoginPassword(e.target.value)}
						required
					/>
				</div>

				<button className={styles.btn} onClick={login}>Login</button>
			</div>
			<div className={styles.OAuthContainer}>
				<div className={`${styles.googleBtn} ${styles.OAuthBtn}`} onClick={googleLogin}>
					<FontAwesomeIcon icon={faGoogle} className={styles.OAuthBrand} />
					<p>Login with Google</p>
				</div>
				<div className={`${styles.githubBtn} ${styles.OAuthBtn}`} onClick={githubLogin}>
					<FontAwesomeIcon icon={faGithub} className={styles.OAuthBrand} />
					<p>Login with GitHub</p>
				</div>
			</div>
			<div className={styles.link}>
				<a href='/register'>
					<u>Register</u>
				</a>
			</div>

			<div>
				<button onClick={getUser}>Get user</button>
				{/*The logout btn appears after pressing get user. */}
				{data ? (
					<div>
						<button onClick={logout}>Logout</button>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Login
