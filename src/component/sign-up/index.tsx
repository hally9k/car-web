import * as React from 'react'
import environment from 'environment'
import signUpMutation from './sign-up-mutation'
import './sign-up.scss'

type State = {
	error: string
	success: string
	form: SignUpForm
}

type SignUpForm = {
	firstName: string | null
	lastName: string | null
	email: string | null
	password: string | null
}

export default class SignUp extends React.Component<void, State> {
	state = {
		error: null,
		success: null,
		form: {
			firstName: null,
			lastName: null,
			email: null,
			password: null
		}
	}

	handleSubmit = event => {
		event.preventDefault()

		signUpMutation(this.state.form, this.handleResponse)
	}

	handleChange = ({ target: { value, name } }) => {
		this.setState(() => ({ form: { ...this.state.form, [name]: value } }))
	}

	handleResponse = (data, error) => {
		if (error) {
			this.setState({ error: 'An error has occurred.', success: null })
		} else {
			this.setState({ error: null, success: `Thanks for signing up ${data.firstName}.` })
		}
	}

	render() {
		const { error, success } = this.state
		return (
			<React.Fragment>
				<form className="form" onSubmit={this.handleSubmit}>
					<label>
						First Name
						<input name="firstName" onChange={this.handleChange} />
					</label>
					<label>
						Last Name
						<input name="lastName" onChange={this.handleChange} />
					</label>
					<label>
						Email
						<input name="email" onChange={this.handleChange} />
					</label>
					<label>
						Password
						<input name="password" onChange={this.handleChange} />
					</label>
					<button>Submit</button>
					{error && <p className="error">{error}</p>}
					{success && <p className="success">{success}</p>}
				</form>
			</React.Fragment>
		)
	}
}
