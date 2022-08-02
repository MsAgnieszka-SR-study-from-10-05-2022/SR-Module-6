import React from 'react'
import PropTypes from 'prop-types'

import 'components/ErrorAndOkMessage/ErrorAndOkMessage.scss'

export const ErrorMessage = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <p
      className={'error-message'}
      {...otherProps}
    >
      <span style={{ fontWeight: 'bold' }}>
        X
      </span>
      {children}
    </p>
  )
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default ErrorMessage
