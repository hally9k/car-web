// @flow
import * as React from 'react'
import { Link } from 'found'
import AppBar from '@material-ui/core/AppBar'

import './navigation.scss'

type Props = {
    children: React.Node
}

export default function Navigation(props: Props): React.Node {
    return (
        <React.Fragment>
            <AppBar position="sticky" className="app-bar">
                <div className="container">
                    <img className="logo" src="static/img/car-icon-white.png" alt="Car logo" />

                    <div className="items">
                        <Link className="item" to="/">
                            Home
                        </Link>
                        <Link className="item" to="/business">
                            Business
                        </Link>
                        <Link className="item" to="/signup">
                            Signup
                        </Link>
                        <Link className="item" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </AppBar>
            {props.children}
        </React.Fragment>
    )
}
