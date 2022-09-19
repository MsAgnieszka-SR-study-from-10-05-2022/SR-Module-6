import React from 'react'
import PropTypes from 'prop-types'

import 'components/Button/Button.scss'

export const Button = (props) => {
  const {
    className,
    label,
    disabled,
    ...otherProps
  } = props

  return (
    <button
      className={`button${className ? ` ${className}` : ''}`}
      disabled={disabled}
      style={{ display: disabled ? 'none' : 'block' }}
      {...otherProps}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button
