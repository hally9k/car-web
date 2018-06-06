// @flow
import * as React from 'react'
import { Link } from 'found'

type Props = {
    children: React.Node
}

export default function Navigation(props: Props): React.Node {
    return (
        <React.Fragment>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </div>
            {props.children}
        </React.Fragment>
    )
}
