import * as React from 'react'
import environment from 'environment'
import signUpMutation from './signup-mutation'
import './signup.scss'

interface IState {
	error: string
	success: string
	form: ISignUpForm
}

export interface ISignUpForm {
	firstName: string | null
	lastName: string | null
	email: string | null
	password: string | null
}

export default class SignUp extends React.Component {
	public state: IState = {
		error: null,
		form: {
			email: null,
			firstName: null,
			lastName: null,
			password: null
		},
		success: null
	}

	public render() {
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

	private handleSubmit = (event: React.SyntheticEvent<any>) => {
		event.preventDefault()

		signUpMutation(this.state.form, this.handleResponse)
	}

	private handleChange = ({ target: { value, name } }: any) => {
		this.setState(() => ({ form: { ...this.state.form, [name]: value } }))
	}

	private handleResponse = (data: any, error: any) => {
		if (error) {
			this.setState({ error: 'An error has occurred.', success: null })
		} else {
			this.setState({ error: null, success: `Thanks for signing up ${data.firstName}.` })
		}
	}
}
