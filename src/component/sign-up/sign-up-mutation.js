import { commitMutation, graphql } from 'react-relay'

const signUp = graphql`
	mutation signUpMutation($authProvider: SignUpData!) {
		signUp(authProvider: $authProvider) {
			firstName
			lastName
			email
			businessId
			createdAt
		}
	}
`

const config = {
	mutation: signUp,
	variables,
	onCompleted: () => console.log('completed'),
	onError: () => console.log('error')
}

export default (variables, callback) => {
	commitMutation(environment, {
		mutation,
		variables,
		onCompleted: () => {
			callback && callback()
		},
		onError: err => console.error(err)
	})
}
