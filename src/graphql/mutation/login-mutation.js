import environment from 'environment'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
	mutation loginMutation($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`

export default (credentials, callback) => {
	commitMutation(environment, {
		mutation,
		onError: error => {
			callback(null, error)
		},
		updater: (store, { login }) => {
			callback(login, null)
		},
		variables: {
			authProvider: {
				credentials
			}
		}
	})
}
