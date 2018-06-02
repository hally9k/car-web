import * as React from 'react'
import { Link } from 'found'

export default () => (
	<div className="navigation">
		<Link to="/">Home</Link>
		<Link to="/signup">Signup</Link>
		<Link to="/login">Login</Link>
	</div>
)
