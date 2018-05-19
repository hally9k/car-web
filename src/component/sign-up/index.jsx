import * as React from 'react'
import classnames from 'classnames'
import environment from 'environment'
import signUpMutation from './sign-up-mutation'
import './sign-up.scss'

// {
// credentials: {
// firstName: "Hal",
// lastName: "Smith Stevens",
// email: "hally9k@gamil.com",
// password: "password1"
// }
// }

export default class SignUp extends React.Component {
	handleSubmit = variables => {
		signUpMutation(variables, () => console.log('woot!'))
	}

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<input name="firstName" />
					<input name="lastName" />
					<input name="email" />
					<input name="password" />
					<button>Submit</button>
				</form>
			</React.Fragment>
		)
	}
}
