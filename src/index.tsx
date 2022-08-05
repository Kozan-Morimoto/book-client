import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './Context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Context>
			<App />
		</Context>
	</React.StrictMode>
)

// Toggle function
window.onload = () => {
	const nav = document.getElementById('nav')
	const toggle = document.getElementById('toggle-a')
	const toggleB = document.getElementById('toggle-b')

	if (toggle && toggleB && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('active')
		})
		toggleB.addEventListener('click', () => {
			nav.classList.toggle('active')
		})
	}
}
