import React from 'react'
import { hot } from 'react-hot-loader'
import SignUp from './sign-up'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/observable/from'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'
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

export default hot(module)(Root)
