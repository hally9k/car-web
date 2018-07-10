// @flow
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import uuid from 'uuid/v4'

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

const network: * = Network.create((operation: *, vars: *): * => {
    const { variables, files } = recReplace(vars)


    const { body, contentType } = Object.keys(files).length > 0 ?
        {
            body: new FormData({
                ...files,
                query: operation.text,
                variables: JSON.stringify(variables),
            }),
            contentType: 'multipart/form-data'
        } :
        {
            body: JSON.stringify({
                query: operation.text,
                variables
            }),
            contentType: 'application/json'
        }

    // TODO: fallback required here
    // eslint-disable-next-line
    return fetch('http://localhost:9090/api', {
        body,
        headers: {
            Accept: 'application/json',
            'Content-Type': contentType
        },
        method: 'POST'
    }).then((response: *): * => response.json())
})

const handlerProvider: * = null

const environment: * = new Environment({
    handlerProvider,
    network,
    store
})

export default environment
