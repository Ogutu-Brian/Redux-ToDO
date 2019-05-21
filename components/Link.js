import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onclick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
)

Link.proptypes = {
    active: PropTypes.bool.isRequired,
    children: Proptypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
