import React from 'react'
import PropTypes from 'prop-types'

import 'components/Form/Form.scss'

export const Form = (props) => {
  const {
    className,
    onSubmit,
    formTitle,
    children,
    ...otherProps
  } = props

  return (
    <form
      className={`basic-form${className ? ` ${className}` : ''}`}
      onSubmit={onSubmit}
      {...otherProps}
    >
      <h2 className={'basic-form__header'}>{formTitle}</h2>
      {children}
    </form>
  )
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  formTitle: PropTypes.string,
  children: PropTypes.node
}

export default Form
