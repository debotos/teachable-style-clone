import React from 'react'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Dummy from './components/Dummy'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
	return (
		<div className='body-public'>
			<Navigation />
			<Hero />
			<Dummy />
			<Footer />
			<Login />
			<SignUp />
		</div>
	)
}

export default App
