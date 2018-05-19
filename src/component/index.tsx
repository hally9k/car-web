import * as React from 'react'
import { hot } from 'react-hot-loader'
import SignUp from './sign-up'

import './index.scss'

export class Root extends React.Component {
	private render() {
		return (
			<div className="app">
				<SignUp />
			</div>
		)
	}
}

// @ts-ignore
export default hot(module)(Root)
