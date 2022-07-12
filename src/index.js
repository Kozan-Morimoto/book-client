import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// Toggle function
window.onload = () => {
	const nav = document.getElementById('nav')
	const toggle = document.getElementById('toggle-a')
	const toggleB = document.getElementById('toggle-b')

	toggle.addEventListener('click', () => {
		nav.classList.toggle('active')
	})
	toggleB.addEventListener('click', () => {
		nav.classList.toggle('active')
	})
}
