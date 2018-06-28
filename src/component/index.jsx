// @flow
import * as React from 'react'
import { queryMiddleware, BrowserProtocol } from 'farce'
import { createRender, createFarceRouter } from 'found'
import { Resolver } from 'found-relay/lib/modern'
import { hot } from 'react-hot-loader'
import CssBaseline from '@material-ui/core/CssBaseline'

import environment from 'environment'
import routes from 'routes'

import '../scss/index.scss'

const Router: * = createFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig: routes,

    render: createRender({})
})

export class Root extends React.Component<*, *> {
    render(): React.Node {
        return (
            <React.Fragment>
                <CssBaseline />
                <Router resolver={new Resolver(environment)} />
            </React.Fragment>
        )
    }
}

export default hot(module)(Root)
