// @flow
import * as React from 'react'
import businessMutation from 'graphql/mutation/create-business-mutation'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LiveSwitch from './live-switch'
import Typography from '@material-ui/core/Typography'
import Page from 'component/core/page'

import './business.scss'

type State = {
    error: string | null,
    form: BusinessForm,
    isLive: boolean
}

export type BusinessForm = {
    color: string | null,
    domain: string | null,
    logo: *,
    name: string | null,
    subdomain: string | null
}

export default class SignUp extends React.Component<*, State> {
    state: State = {
        error: null,
        form: {
            name: null,
            subdomain: null,
            domain: null,
            color: null,
            logo: null
        },
        isLive: false
    }

    handleActiveToggle = () => {
        this.setState((prevState: State): * => ({ isLive: !prevState.isLive }))
    }

    handleSubmit = (event: SyntheticEvent<*>) => {
        event.preventDefault()

        businessMutation(this.state.form, this.handleResponse)
    }

    handleChange = ({ target: { value, name } }: *) => {
        this.setState((prevState: State): * => ({ form: { ...prevState.form, [name]: value } }))
    }

    handleResponse = (data: BusinessForm | null, error: *) => {
        if (error) {
            this.setState({ error: 'An error has occurred.' })
        }
    }

    render(): React.Node {
        const { error, isLive }: State = this.state

        return (
            <Page>
                <Typography variant="display3">Business</Typography>
                <div className="meta-controls">
                    {isLive ? <span className="status is-live">Live</span> : <span className="status">Inactive</span>}
                    <LiveSwitch onChange={this.handleActiveToggle} />
                </div>

                <Grid container={true} justify="center" alignItems="center" className="container">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <TextField
                            className="input"
                            required={true}
                            placeholder="Company Name"
                            fullWidth={true}
                            name="name"
                            onChange={this.handleChange}
                        />
                        <TextField
                            className="input"
                            placeholder="Logo"
                            fullWidth={true}
                            name="logo"
                            onChange={this.handleChange}
                        />
                        <TextField
                            className="input"
                            required={true}
                            placeholder="Website Address Prefix"
                            fullWidth={true}
                            name="subdomain"
                            onChange={this.handleChange}
                        />
                        <TextField
                            className="input"
                            required={true}
                            placeholder="Color"
                            fullWidth={true}
                            name="color"
                            onChange={this.handleChange}
                        />
                        <div className="button-group">
                            <Button type="submit" variant="contained" color="primary">
                                Update
                            </Button>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </form>
                </Grid>
            </Page>
        )
    }
}
