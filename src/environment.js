import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) =>
	fetch('http://localhost:9000', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: operation.text,
			variables
		})
	}).then(response => response.json())
)

const handlerProvider = null

const environment = new Environment({
	handlerProvider,
	network,
	store
})

export default environment
