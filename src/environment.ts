import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const store: any = new Store(new RecordSource())

const network = Network.create((operation: any, variables: any) =>
	fetch('http://localhost:9090/api', {
		body: JSON.stringify({
			query: operation.text,
			variables
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		method: 'POST'
	}).then(response => response.json())
)

const handlerProvider = null

const environment = new Environment({
	handlerProvider,
	network,
	store
})

export default environment
