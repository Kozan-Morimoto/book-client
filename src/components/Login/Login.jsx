import React, { useState } from 'react'
import './Login.css'
import Axios from 'axios'

function Login() {
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	const login = () => {
		Axios({
			method: 'POST',
			data: {
				email: loginEmail,
				password: loginPassword,
			},
			withCredentials: true,
			url: 'http://localhost:5000/login',
		}).then((res) => console.log(res))
	}
	const getUser = () => {
		Axios({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:5000/getUser',
		}).then((res) => console.log(res))
	}

	return (
		<div className='login-register'>
			<div className='login-register-greeting'>
				<h1>Continue your legend.</h1>
			</div>
			<form action='/login' method='post'>
				<div>
					<input
						type='text'
						name='email'
						id='email'
						placeholder='Email'
						onChange={(e) => setLoginEmail(e.target.value)}
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

				<button onClick={login}>
					Login
				</button>
			</form>
			<div className='login-register-link'>
				<a href='/register'>
					<u>Register</u>
				</a>
			</div>
		</div>
	)
}

export default Login
