// @flow
import * as React from 'react'
import signUpMutation from 'graphql/mutation/sign-up-mutation'
import './signup.scss'

type State = {
    error: string | null,
    form: SignUpForm,
    success: string | null
}

export type SignUpForm = {
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    password: string | null
}

export default class SignUp extends React.Component<*, State> {
    state: State = {
        error: null,
        form: {
            email: null,
            firstName: null,
            lastName: null,
            password: null
        },
        success: null
    }

    handleSubmit = (event: SyntheticEvent<*>) => {
        event.preventDefault()

        signUpMutation(this.state.form, this.handleResponse)
    }

    handleChange = ({ target: { value, name } }: *) => {
        this.setState((prevState: State): * => ({ form: { ...prevState.form, [name]: value } }))
    }

    handleResponse = (data: SignUpForm | null, error: *) => {
        if (error) {
            this.setState({ error: 'An error has occurred.', success: null })
        } else {
            this.setState({ error: null, success: `Thanks for signing up ${(data && data.firstName) || ''}.` })
        }
    }

    render(): React.Node {
        const { error, success }: State = this.state

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
