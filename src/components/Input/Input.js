import React from 'react'
import PropTypes from 'prop-types'

import 'components/Input/Input.scss'

export const Input = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <input
      className={`input${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </input>
  )
}

Input.propTypes = {
  className: PropTypes.string
}

export default Input
