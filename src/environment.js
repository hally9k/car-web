import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
	return fetch('http://localhost:9090/api', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: operation.text,
			variables
		})
	}).then(response => {
		return response.json()
	})
})

const handlerProvider = null

const environment = new Environment({
	handlerProvider,
	network,
	store
})

export default environment
