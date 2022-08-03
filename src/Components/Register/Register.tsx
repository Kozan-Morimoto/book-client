import React, { useState } from 'react'
import '../Login/Login.css'
import './Register.css'
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
			url: 'http://localhost:5000/auth/register',
		}).then((res) => console.log(res))
	}

	return (
		<div className='login-register'>
			<div className='login-register-greeting'>
				<h1>Begin your legend.</h1>
			</div>
			<div className='input-container'>
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

				<button onClick={register}>Register</button>
			</div>
			<div className='login-register-link'>
				<a href='/login'>
					<u>Login</u>
				</a>
			</div>
		</div>
	)
}

export default Register
