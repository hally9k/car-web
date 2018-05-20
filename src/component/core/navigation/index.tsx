import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
	<div className="navigation">
		<NavLink to="/">Home</NavLink>
		<NavLink to="/signup">Signup</NavLink>
		<NavLink to="/login">Login</NavLink>
	</div>
)
