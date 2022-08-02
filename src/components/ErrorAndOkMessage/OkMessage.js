import React from 'react'
import PropTypes from 'prop-types'

import 'components/ErrorAndOkMessage/ErrorAndOkMessage.scss'

export const OkMessage = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <p
      className={'ok-message'}
      {...otherProps}
    >
      <span style={{ fontWeight: 'bold' }}>
        OK
      </span>
      {children}
    </p>
  )
}

OkMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default OkMessage
