import * as React from 'react'
import { hot } from 'react-hot-loader'
import SignUp from 'component/auth/sign-up'
import Login from 'component/auth/login'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Navigation from 'component/core/navigation'
import './index.scss'

export class Root extends React.Component {
	public render() {
		return (
			<div className="app">
				<Router>
					<React.Fragment>
						<Navigation />
						<Switch>
							<Route exact path={'/'} component={() => <p>Home</p>} />
							<Route exact path={'/signup'} component={SignUp} />
							<Route exact path={'/login'} component={Login} />
						</Switch>
					</React.Fragment>
				</Router>
			</div>
		)
	}
}

// @ts-ignore
export default hot(module)(Root)
