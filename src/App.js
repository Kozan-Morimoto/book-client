import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	)
}

export default App
