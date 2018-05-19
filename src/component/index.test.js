import { testStatechart } from 'react-automata'
import { Root, statechart } from './index.jsx'

test('it works', () => {
	testStatechart({ statechart }, Root)
})
