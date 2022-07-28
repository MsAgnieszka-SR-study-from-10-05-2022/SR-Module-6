import React from 'react'
import PropTypes from 'prop-types'

import InputWrapper from 'components/InputWrapper'
import Button from 'components/Button'

import 'pages/PageRegistration/PageRegistration.scss'

export const PageRegistration = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={'registration-form-wrapper'}>
      <form
        onSubmit={handleSubmit}
        className={`registration-form${className ? ` ${className}` : ''}`}
        {...otherProps}
      >
        <h2 className={'registration-form__header'}>Create an account</h2>
        <InputWrapper
          title={'email'}
          label={'Your e-mail:'}
        />
        <InputWrapper
          title={'password'}
          label={'Password:'}
          type={'password'}
        />
        <InputWrapper
          title={'password2'}
          label={'Repeat password:'}
          type={'password'}
        />
        <Button
          label={'Register'}
          type={'submit'}
          onClick={() => console.log('click')}
        />
      </form>
    </div>
  )
}

PageRegistration.propTypes = {
  className: PropTypes.string
}

export default PageRegistration
