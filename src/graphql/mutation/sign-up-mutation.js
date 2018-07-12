// @flow
import environment from 'environment'
import { type SignUpForm } from 'component/auth/sign-up'
import { commitMutation, graphql } from 'react-relay'
import { type signUpMutationResponse  } from './__generated__/signUpMutation.graphql'

const mutation: * = graphql`
	mutation signUpMutation($input: signUpMutationInput!) {
		signUp(input: $input) {
		    payload {
		        user {
                    firstName
                    lastName
                    email
                    businessId
                    createdAt
                }
                token
		    }
		}
	}
`

export default (credentials: SignUpForm, callback: (data: any, error: any) => any) => {
    commitMutation(environment, {
        mutation,
        onError: (error: *) => {
            callback(null, error)
        },
        updater: (store: *, { signUp }: signUpMutationResponse) => {
            callback(signUp, null)
        },
        variables: { input: { payload: credentials } }
    })
}
