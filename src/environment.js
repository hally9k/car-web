// @flow
import 'regenerator-runtime/runtime'
import { Environment, RecordSource, Store } from 'relay-runtime'
import type { Middleware } from 'react-relay-network-modern/lib/definition'
import uuid from 'uuid/v4'
import { RelayNetworkLayer, RelayNetworkLayerRequestBatch, urlMiddleware } from 'react-relay-network-modern'

const store: * = new Store(new RecordSource())

type ReplacedFields = {
    files: { [id: string]: File | Blob },
    variables: { [id: string]: mixed },
}

const recReplace = (variables: Object): ReplacedFields => Object.entries(variables).reduce((acc: ReplacedFields, [key, value]: *): * => {
    if (value instanceof File || value instanceof Blob) {
        const id: string = uuid.v4()

        return {
            variables: { ...acc.variables, [key]: id },
            files: { ...acc.files, [id]: value },
        }
    }

    if (value instanceof Object) {
        const { variables: v, files: u }: * = recReplace(value)

        return { variables: { ...variables, [key]: v }, files: { ...acc.files, ...u } }
    }

    return { variables: { ...variables, [key]: value }, files: acc.files }
}, { variables: {}, files: {} })

export const fileMiddleware: Middleware = (next: *): * => async(req: *): * => {
    if (req instanceof RelayNetworkLayerRequestBatch) {
        return next(req)
    }

    const updated = recReplace(req.variables)

    req.variables = updated.variables
    req.uploadables = updated.files

    return next(req)
}

const network: * = new RelayNetworkLayer([
    fileMiddleware,
    urlMiddleware({ url: () => '/api', })
])

const handlerProvider: * = null

const environment: * = new Environment({
    handlerProvider,
    network,
    store
})

export default environment
