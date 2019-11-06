import React from 'react'
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'

export const history = createHistory()

function AppRoutes() {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/login' component={LoginPage} />
				<Route exact path='/signup' component={SignUpPage} />
				<Redirect to='/' />
			</Switch>
		</Router>
	)
}

export default AppRoutes
