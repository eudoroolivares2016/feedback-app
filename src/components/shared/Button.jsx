import React from 'react'
import PropTypes from 'prop-types'

function Button({children, isDisabled, type, version }) {
  
  return (
      <button type={type} disabled={isDisabled}
       className={`btn btn-${version}`}>     
      {children}
      </button>
    )
}

Button.defaultProps = {
  isDisabled: false,
  type: 'button',
  version: 'primary'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button