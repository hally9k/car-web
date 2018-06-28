// @flow
import environment from 'environment'
import { type BusinessForm } from 'component/business'
import { commitMutation, graphql } from 'react-relay'

const mutation: * = graphql`
	mutation createBusinessMutation($input: CreateBusinessMutationInput!) {
		createBusiness(input: $input) {
			business {
                name
                subdomain
                domain
                id
            }
            clientMutationId
		}
	}
`

export default (credentials: BusinessForm, callback: *) => {
    commitMutation(environment, {
        mutation,
        onError: (error: *) => {
            callback(null, error)
        },
        updater: (store: *, { createBusiness }: *) => {
            callback(createBusiness, null)
        },
        variables: {}
    })
}
