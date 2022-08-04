import React, { useState } from 'react'
import LoginRegisterCSS from './LoginRegister.module.css'
import Axios from 'axios'

function Login() {
	const [loginUsername, setLoginUsername] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [data, setData] = useState(null)

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
		<div className={LoginRegisterCSS.loginRegister}>
			<div className={LoginRegisterCSS.greeting}>
				<h1>Continue your legend.</h1>
			</div>

			<div className={LoginRegisterCSS.inputContainer}>
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

				<button onClick={login}>Login</button>
			</div>
			<div className={LoginRegisterCSS.link}>
				<a href='/register'>
					<u>Register</u>
				</a>
			</div>

			<div>
				<button onClick={getUser}>Get user</button>
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