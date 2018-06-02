import * as React from 'react'
import { makeRouteConfig, Route } from 'found'

import SignUp from 'component/auth/sign-up'
import Navigation from 'component/core/navigation'
import Login from 'component/auth/login'

export default makeRouteConfig(
	<Route path="/" Component={Navigation}>
		<Route path="/login" Component={Login} />
		<Route path="/signup" Component={SignUp} />
	</Route>
)
