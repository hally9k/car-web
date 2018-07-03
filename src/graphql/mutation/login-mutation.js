// @flow
import environment from 'environment'
import { commitMutation, graphql } from 'react-relay'

const mutation: * = graphql`
    mutation loginMutation($input:  loginMutationInput!) {
        login(input: $input) {
            payload
        }
    }
`

export default (credentials: *, callback: *) => {
    commitMutation(environment, {
        mutation,
        onError: (error: *) => {
            callback(null, error)
        },
        updater: (store: *, { login }: *) => {
            callback(login, null)
        },
        variables: { input: { payload: credentials } }
    })
}
