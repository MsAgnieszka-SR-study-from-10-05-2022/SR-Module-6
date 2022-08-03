import React from 'react'
import PropTypes from 'prop-types'

import 'components/Input/Input.scss'

export const Input = (props) => {
  const {
    className,
    inputEmailRef,
    ...otherProps
  } = props

  return (
    <input
      className={`input${className ? ` ${className}` : ''}`}
      ref={inputEmailRef}
      {...otherProps}
    >

    </input>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  inputEmailRef: PropTypes.object
}

export default Input
