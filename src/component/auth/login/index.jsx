// @flow
import * as React from 'react'
import loginMutation from 'graphql/mutation/login-mutation'
import './login.scss'

type State = {
    error: string | null,
    form: LoginForm
}

type LoginForm = {
    email: string | null,
    password: string | null
}

export default class Login extends React.Component<State, *> {
    state: State = {
        error: null,
        form: {
            email: null,
            password: null
        }
    }

    handleSubmit = (event: SyntheticEvent<*>) => {
        event.preventDefault()

        loginMutation(this.state.form, this.handleResponse)
    }

    handleChange = ({ target: { value, name } }: *) => {
        this.setState((prevState: State): * => ({ form: { ...prevState.form, [name]: value } }))
    }

    handleResponse = (data: *, error: *) => {
        if (error) {
            this.setState({ error: 'An error has occurred.' })
        } else {
            this.setState({ success: `Thanks for signing up ${(data && data.firstName) || ''}.` })
        }
    }

    render(): React.Node {
        const { error }: State = this.state

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
}
