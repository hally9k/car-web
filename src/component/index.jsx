// @flow
import * as React from 'react'
import { queryMiddleware, BrowserProtocol } from 'farce'
import { createRender, createFarceRouter } from 'found'
import { Resolver } from 'found-relay/lib/modern'
import { hot } from 'react-hot-loader'

import environment from 'environment'
import routes from 'routes'

import './index.scss'

const Router: * = createFarceRouter({
    historyProtocol: new BrowserProtocol(),
    historyMiddlewares: [queryMiddleware],
    routeConfig: routes,

    render: createRender({})
})

export class Root extends React.Component<*, *> {
    render(): React.Node {
        return <Router resolver={new Resolver(environment)} />
    }
}

export default hot(module)(Root)
