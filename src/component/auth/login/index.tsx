import * as React from 'react'
import environment from 'environment'
import loginMutation from './login-mutation'
import './login.scss'

interface IState {
	error: string
	form: ILoginForm
}

export interface ILoginForm {
	email: string | null
	password: string | null
}

export default class Login extends React.Component {
	public state: IState = {
		error: null,
		form: {
			email: null,
			password: null
		}
	}

	public render() {
		const { error } = this.state
		return (
			<React.Fragment>
				<form className="form" onSubmit={this.handleSubmit}>
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
				</form>
			</React.Fragment>
		)
	}

	private handleSubmit = (event: React.SyntheticEvent<any>) => {
		event.preventDefault()

		loginMutation(this.state.form, this.handleResponse)
	}

	private handleChange = ({ target: { value, name } }: any) => {
		this.setState(() => ({ form: { ...this.state.form, [name]: value } }))
	}

	private handleResponse = (data: any, error: any) => {
		if (error) {
			this.setState({ error: 'An error has occurred.' })
		} else {
			this.setState({ success: `Thanks for signing up ${data.firstName}.` })
		}
	}
}
