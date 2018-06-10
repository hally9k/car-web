// @flow
import * as React from 'react'
import loginMutation from 'graphql/mutation/login-mutation'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import '../auth.scss'

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
            <Grid container={true} justify="center" alignItems="center" className="container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <TextField
                        required={true}
                        className="input"
                        placeholder="Email"
                        fullWidth={true}
                        name="email"
                        onChange={this.handleChange}
                    />
                    <TextField
                        required={true}
                        className="input"
                        placeholder="Password"
                        fullWidth={true}
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                    />
                    <div className="button-group">
                        <Button>Signup</Button>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </div>
                    {error && <p className="error">{error}</p>}
                </form>
            </Grid>
        )
    }
}
