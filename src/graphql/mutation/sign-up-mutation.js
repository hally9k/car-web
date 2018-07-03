// @flow
import environment from 'environment'
import { type SignUpForm } from 'component/auth/sign-up'
import { commitMutation, graphql } from 'react-relay'

const mutation: * = graphql`
	mutation signUpMutation($input: signUpMutationInput!) {
		signUp(input: $input) {
		    payload {
		        firstName
                lastName
                email
                businessId
                createdAt
		    }
		}
	}
`

export default (credentials: SignUpForm, callback: *) => {
    commitMutation(environment, {
        mutation,
        onError: (error: *) => {
            callback(null, error)
        },
        updater: (store: *, { signUp }: *) => {
            callback(signUp, null)
        },
        variables: { input: { payload: credentials } }
    })
}
