// @flow
import * as React from 'react'

type Props = {
    children: React.Node
}

export default function Page(props: Props): React.Node {
    return <div className="page">{props.children}</div>
}
