import * as React from 'react'
import { render } from 'react-testing-library'
import { Root } from './index.jsx'

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
