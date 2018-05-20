import environment from 'environment'
import { commitMutation, graphql } from 'react-relay'

const mutation = graphql`
	mutation loginMutation($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`

export default (credentials: any, callback: any) => {
	commitMutation(environment, {
		mutation,
		onError: (error: any) => {
			callback(null, error)
		},
		updater: (store: any, { login }: any) => {
			callback(login, null)
		},
		variables: {
			authProvider: {
				credentials
			}
		}
	})
}
