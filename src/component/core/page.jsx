// @flow
import * as React from 'react'

type Props = {
    children: React.Node,
    onClick: *
}

export default function Page(props: Props): React.Node {
    return (
        // eslint-disable-next-line
        <div className="page" onClick={props.onClick}>
            {props.children}
        </div>
    )
}
