import React from 'react'
import PropTypes from 'prop-types'

import 'components/Button/Button.scss'

export const Button = (props) => {
  const {
    className,
    label,
    ...otherProps
  } = props

  return (
    <button
      className={`button${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
}

export default Button
