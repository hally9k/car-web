import * as React from 'react'
import { hot } from 'react-hot-loader'
import SignUp from './sign-up'

import './index.scss'

export class Root extends React.Component {
	render() {
		return (
			<div className="app">
				<SignUp />
			</div>
		)
	}
}

export default hot()(Root)
