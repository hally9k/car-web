// @flow
import * as React from 'react'
import businessMutation from 'graphql/mutation/create-business-mutation'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import Page from 'component/core/page'
import { TwitterPicker } from 'react-color'

import './business.scss'

type State = {
    error: string | null,
    form: BusinessForm,
    isColorPickerVisible: boolean,
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
            color: '',
            logo: null
        },
        isLive: false,
        isColorPickerVisible: false
    }

    handleActiveToggle = () => {
        this.setState((prevState: State): * => ({ isLive: !prevState.isLive }))
    }

    handleColorPickerToggle = (event: *) => {
        event.preventDefault()
        event.stopPropagation()

        this.setState((prevState: State): * => ({ isColorPickerVisible: !prevState.isColorPickerVisible }))
    }

    handleColorPickerClose = (event: *) => {
        event.preventDefault()
        event.stopPropagation()

        this.setState({ isColorPickerVisible: false })
    }

    handleSubmit = (event: SyntheticEvent<*>) => {
        event.preventDefault()

        businessMutation(this.state.form, this.handleResponse)
    }

    handleChange = ({ target: { value, name } }: *) => {
        this.setState((prevState: State): * => ({ form: { ...prevState.form, [name]: value } }))
    }

    handleColorChange = ({ hex }: *) => {
        this.setState((prevState: State): * => ({ form: { ...prevState.form, color: hex } }))

        const root: * = document.querySelector(':root')

        // TODO: This feels shady, is there a cleaner way to do this in React?
        if (root) {
            root.style.setProperty('--business-color', hex)
        }
    }

    handleResponse = (data: BusinessForm | null, error: *) => {
        if (error) {
            this.setState({ error: 'An error has occurred.' })
        }
    }

    render(): React.Node {
        const {
            error,
            isLive,
            isColorPickerVisible,
            form: { color }
        }: State = this.state

        return (
            <Page onClick={this.handleColorPickerClose}>
                <div className="header-container">
                    <Typography className="heading" variant="display3">
                        Business
                    </Typography>
                    <div className="meta-controls">
                        {isLive ? (
                            <span className="status is-live">Live</span>
                        ) : (
                            <span className="status">Inactive</span>
                        )}
                        <Switch onChange={this.handleActiveToggle} />
                    </div>
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
                            required={true}
                            placeholder="Website Address Prefix"
                            fullWidth={true}
                            name="subdomain"
                            onChange={this.handleChange}
                        />
                        <div className="color-input">
                            <TextField
                                className="input"
                                required={true}
                                placeholder="Business Color"
                                fullWidth={true}
                                onClick={this.handleColorPickerToggle}
                                value={color}
                            />
                            <div className="color-circle" />
                            {isColorPickerVisible && (
                                <div className="color-picker">
                                    <TwitterPicker
                                        name="color"
                                        color={color ? color : undefined}
                                        onChange={this.handleColorChange}
                                    />
                                </div>
                            )}
                        </div>
                        <input
                            accept="image/*"
                            id="button-file"
                            name="logo"
                            multiple={true}
                            type="file"
                            hidden={true}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="raised-button-file">
                            <Button fullWidth={true} className="input" component="span">
                                Upload Logo
                            </Button>
                        </label>
                        <div className="button-group">
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
                        {error && <p className="error">{error}</p>}
                    </form>
                </Grid>
            </Page>
        )
    }
}
