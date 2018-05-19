import * as React from 'react'
import { Root } from './index.tsx'
import { render } from 'react-testing-library'

describe('', () => {
	it('', () => {
		const { component } = render(<Root />)

		expect(component).toMatchSnapshot()
	})
})
