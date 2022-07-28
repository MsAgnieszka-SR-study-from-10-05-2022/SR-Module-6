import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/Input'

import 'components/InputWrapper/InputWrapper.scss'

export const InputWrapper = (props) => {
  const {
    className,
    title,
    label,
    ...otherProps
  } = props

  return (
    <div className={'input-wrapper'}>
      <div
        className={'input-line'}
      >
        <label
          htmlFor={title}
          className={'label'}
        >
          {label}
        </label>
        <Input
          id={title}
          name={title}
          className={`input${className ? ` ${className}` : ''}`}
          {...otherProps}
        />
      </div>
      <div className={'input-validation'}>
        <p className={'input-error'}></p>
      </div>
    </div>
  )
}

InputWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string
}

export default InputWrapper
