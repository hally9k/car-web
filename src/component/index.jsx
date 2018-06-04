import * as React from 'react'
import { hot } from 'react-hot-loader'
import Navigation from 'component/core/navigation'
import { queryMiddleware, HashProtocol } from 'farce'
import { createRender, createFarceRouter } from 'found'
import { Resolver } from 'found-relay/lib/modern'
import environment from 'environment'
import routes from 'routes'
import './index.scss'

const Router = createFarceRouter({
	historyProtocol: new HashProtocol(),
	historyMiddlewares: [queryMiddleware],
	routeConfig: routes,

	render: createRender({})
})

export class Root extends React.Component<*, *> {
	render() {
		return <Router resolver={new Resolver(environment)} />
	}
}

export default hot(module)(Root)
