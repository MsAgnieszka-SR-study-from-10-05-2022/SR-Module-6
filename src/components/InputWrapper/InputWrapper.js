import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/Input'
import { ErrorMessage, OkMessage } from 'components/ErrorAndOkMessage'

import 'components/InputWrapper/InputWrapper.scss'

export const InputWrapper = (props) => {
  const {
    className,
    // inputEmailRef,
    title,
    label,
    emailErrorRegExp,
    emailInBaseError,
    errorPassword,
    errorsPasswordDetails,
    errorConfirmPassword,
    onChange,
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
          // ref={inputEmailRef}
          id={title}
          name={title}
          onChange={onChange}
          className={`
            ${errorPassword ?
            ` ${'input-error'}`
              :
                (emailInBaseError || emailErrorRegExp) ?
            ` ${'input-error'}`
                  :
                  errorConfirmPassword ?
                  ` ${'input-error'}`
                    :
                    ''}`
          }
          {...otherProps}
        />
      </div>
      <div className={'input-validation'}>
        {
          emailInBaseError ?
            <ErrorMessage key={'emailInBaseError'}> - E-mail is already exists in our base</ErrorMessage>
            :
            emailErrorRegExp ?
              <ErrorMessage key={'emailErrorRegExp'}> - E-mail is incorrect</ErrorMessage>
              :
              ''
        }

        {
          errorPassword ?
            errorsPasswordDetails && [
              errorsPasswordDetails.upperCaseLetter ?
                <ErrorMessage key={'upperCaseLetterError'}> - Enter at least one uppercase letter</ErrorMessage>
                :
                <OkMessage key={'upperCaseLetterOk'}> - There is at least one uppercase letter</OkMessage>,
              errorsPasswordDetails.lowerCaseLetter ?
                <ErrorMessage key={'lowerCaseLetterError'}> - Enter at least one lowercase letter</ErrorMessage>
                :
                <OkMessage key={'lowerCaseLetterOk'}> - There is at least one lowercase letter</OkMessage>,
              errorsPasswordDetails.digit ?
                <ErrorMessage key={'digitError'}> - Enter at least one digit</ErrorMessage>
                :
                <OkMessage key={'digitOk'}> - There is at least one digit</OkMessage>,
              errorsPasswordDetails.specialCharacter ?
                <ErrorMessage key={'specialCharacterError'}> - Enter at least one special character</ErrorMessage>
                :
                <OkMessage key={'specialCharacterOk'}> - There is at least one special character</OkMessage>,
              errorsPasswordDetails.minLength ?
                <ErrorMessage key={'lengthError'}> - Password must have at least 8 characters</ErrorMessage>
                :
                <OkMessage key={'lengthOk'}> - Password has at least at least 8 characters</OkMessage>
            ]
            :
            ''
        }

        {
          errorConfirmPassword ?
            <ErrorMessage> - Passwords must be the same</ErrorMessage>
            :
            ''
            }
      </div>
    </div>
  )
}

InputWrapper.propTypes = {
  className: PropTypes.string,
  // inputEmailRef: PropTypes.object,
  title: PropTypes.string,
  label: PropTypes.string,
  emailErrorRegExp: PropTypes.bool,
  emailInBaseError: PropTypes.bool,
  errorPassword: PropTypes.bool,
  errorsPasswordDetails: PropTypes.object,
  errorConfirmPassword: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default InputWrapper
