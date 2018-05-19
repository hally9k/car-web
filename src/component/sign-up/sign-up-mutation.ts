import environment from 'environment'
import { SignUpForm } from './index'
import { commitMutation, graphql } from 'react-relay'

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

export default (credentials: SignUpForm, callback: any) => {
	commitMutation(environment, {
		mutation,
		onError: (error: any) => {
			callback(null, error)
		},
		updater: (store: any, { signUp }: any) => {
			callback(signUp, null)
		},
		variables: {
			authProvider: {
				credentials
			}
		}
	})
}
