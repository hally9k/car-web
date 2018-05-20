import * as React from 'react'
import { Root } from './index.tsx'
import { render } from 'react-testing-library'

jest.mock('react-relay', () => ({
	graphql: jest.fn(),
	commitMutation: jest.fn()
}))

describe('', () => {
	it('', () => {
		const { component } = render(<Root />)

		expect(component).toMatchSnapshot()
	})
})
