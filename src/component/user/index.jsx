import * as React from 'react'
import classnames from 'classnames'
import environment from 'environment'
import { QueryRenderer, graphql } from 'react-relay'
import './user.scss'

export default class User extends React.Component {
	render() {
		return (
			<QueryRenderer
				environment={environment}
				query={graphql`
					query userQuery($id: ID) {
						viewer {
							User(id: $id) {
								name
								dateOfBirth
							}
						}
					}
				`}
				variables={{
					id: 'cjgpmvl4e99oi0114u9rxlk9k'
				}}
				render={({ error, props }) => {
					if (error) {
						return <div>{error.message}</div>
					} else if (props) {
						return <div>{props.viewer.User.name} is great!</div>
					}
					return <div>Loading</div>
				}}
			/>
		)
	}
}
