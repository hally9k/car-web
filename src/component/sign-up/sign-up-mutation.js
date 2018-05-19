import { commitMutation, graphql } from 'react-relay'
import environment from 'environment'

const mutation = graphql`
	mutation signUpMutation($authProvider: SignupData!) {
		signUp(authProvider: $authProvider) {
			firstName
			lastName
			email
			businessId
			createdAt
		}
	}
`

export default (credentials, callback) => {
	commitMutation(environment, {
		mutation,
		variables: {
			authProvider: {
				credentials
			}
		},
		onError: error => {
			callback(null, error)
		},
		updater: (store, { signUp }) => {
			callback(signUp, null)
		}
	})
}
