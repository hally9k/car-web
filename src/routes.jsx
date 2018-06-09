// @flow
import * as React from 'react'
import Login from 'component/auth/login'
import Navigation from 'component/core/navigation'
import SignUp from 'component/auth/sign-up'
import { hotRouteConfig, makeRouteConfig, Route } from 'found'

export default hotRouteConfig(
    makeRouteConfig(
        <Route path="/" Component={Navigation}>
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={SignUp} />
        </Route>
    )
)
