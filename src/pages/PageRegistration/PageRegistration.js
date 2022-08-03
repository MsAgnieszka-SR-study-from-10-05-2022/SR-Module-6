import React from 'react'

import InputWrapper from 'components/InputWrapper'
import Button from 'components/Button'

import 'pages/PageRegistration/PageRegistration.scss'
import colors from 'universalStyles/colors'

export const PageRegistration = (props) => {
  const {
    ...otherProps
  } = props

  // state
  const [inputFields, setInputField] = React.useState({ // 1st state
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {
    email,
    password,
    confirmPassword
  } = inputFields

  const [emailsDataFromBase, setEmailsDataFromBase] = React.useState([]) // 2nd state
  const [emailErrorRegExp, setEmailErrorRegExp] = React.useState(false) // 3rd state
  const [emailInBaseError, setEmailInBaseError] = React.useState(false) // 4th state

  const [passwordErrorRegExp, setPasswordErrorRegExp] = React.useState(false) // 5th state
  const [passwordErrorDetails, setPasswordErrorDetail] = React.useState({ // 6th state
    upperCaseLetter: false,
    lowerCaseLetter: false,
    digit: false,
    specialCharacter: false,
    minLength: false
  })

  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false) // 7th state

  // eslint-disable-next-line no-unused-vars
  const [isValidForm, setIsValidForm] = React.useState(false) // 8th state

  // RegExp to check the email
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const regExpEmailToCheck = new RegExp(emailPattern)

  // Variables to check the password
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const regExpPasswordToCheck = new RegExp(passwordPattern)
  const upperCaseLetterToCheck = /[A-Z]/
  const lowerCaseLetterToCheck = /[a-z]/
  const digitToCheck = /[0-9]/
  const specialCharacterToCheck = /[@$!%*?&]/

  // functions
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputField({
      ...inputFields,
      [name]: value
    })
  }

  // functions for email
  const inputEmailRef = React.useRef()

  const getEmailsFromBase = async () => {
    await fetch('/emails.json')
      .then((r) => (r.json()))
      .then((result) => setEmailsDataFromBase(result.emails))
  }

  // useEffect for mount app only
  React.useEffect(() => {
    getEmailsFromBase()
    inputEmailRef.current.focus()
  }, [])

  const checkEmailWithRegExp = () => {
    if (!regExpEmailToCheck.test(email)) {
      setEmailErrorRegExp(true)
    } else {
      setEmailErrorRegExp(false)
    }
    console.log('emailErrorRegExp: ', emailErrorRegExp)
  }

  const checkEmailWithBase = () => {
    setEmailInBaseError(() => false)
    if (email !== '' && emailsDataFromBase !== {}) {
      emailsDataFromBase.filter((emailFromBase) => {
        if (email === emailFromBase.email) {
          return setEmailInBaseError(() => true)
        }
        return emailFromBase
      })
    }
  }

  const emailErrorRegExpBlur = (e) => {
    checkEmailWithRegExp()
    checkEmailWithBase()
  }

  // function for password
  const checkPassword = () => {
    if (!regExpPasswordToCheck.test(password)) {
      setPasswordErrorRegExp(true)

      // checking uppercase letters
      if (upperCaseLetterToCheck.test(password) < 1) {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, upperCaseLetter: true }
        })
      } else {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, upperCaseLetter: false }
        })
      }

      // checking lowercase letters
      if (lowerCaseLetterToCheck.test(password) < 1) {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, lowerCaseLetter: true }
        })
      } else {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, lowerCaseLetter: false }
        })
      }

      // checking digit
      if (digitToCheck.test(password) < 1) {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, digit: true }
        })
      } else {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, digit: false }
        })
      }

      // checking special character
      if (specialCharacterToCheck.test(password) < 1) {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, specialCharacter: true }
        })
      } else {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, specialCharacter: false }
        })
      }
      // checking length of the password
      if (password.length < 8) {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, minLength: true }
        })
      } else {
        setPasswordErrorDetail((prevState) => {
          return { ...prevState, minLength: false }
        })
      }
    } else {
      setPasswordErrorRegExp(false)
      setPasswordErrorDetail({
        upperCaseLetter: false,
        lowerCaseLetter: false,
        digit: false,
        specialCharacter: false,
        minLength: false
      })
    }
  }

  // function for confirm password
  const checkConfirmPassword = () => {
    if (confirmPassword === '' || password !== confirmPassword) {
      return setConfirmPasswordError(() => true)
    } else {
      return setConfirmPasswordError(() => false)
    }
  }

  // React.useEffect(() => {
  //   checkConfirmPassword()
  // }, [checkConfirmPassword])

  // let formVal = false

  // if (email !== '' &&
  //     password !== '' &&
  //     confirmPassword !== '' &&
  //     !emailInBaseError &&
  //     !passwordErrorRegExp &&
  //     !confirmPasswordError) {
  //   formVal = true
  // }

  // function checking valid form
  const checkValidForm = React.useCallback(() => {
    if (email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      !emailInBaseError &&
      !emailErrorRegExp &&
      !passwordErrorRegExp &&
      !confirmPasswordError) {
      return setIsValidForm(() => true)
    } else {
      return setIsValidForm(() => false)
    }
  }, [confirmPassword, confirmPasswordError, email, emailErrorRegExp, emailInBaseError, password, passwordErrorRegExp])

  React.useEffect(() => {
    checkValidForm()
  }, [checkValidForm])

  // const finalResult = () => {
  //   if (isValidForm) {
  //     console.log('The form was sent')
  //     console.log('data: ', inputFields)

  //     setInputField({
  //       email: '',
  //       password: '',
  //       confirmPassword: ''
  //     })
  //     return
  //   }

  //   if (!isValidForm) {
  //     return console.log('The form is invalid')
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    getEmailsFromBase()
    checkPassword()
    checkConfirmPassword()
    checkValidForm()
    // finalResult()

    if (isValidForm) {
      console.log('The form was sent')
      console.log('data: ', inputFields)

      setInputField({
        email: '',
        password: '',
        confirmPassword: ''
      })
      return
    }

    if (!isValidForm) {
      return console.log('The form is invalid')
    }
  }

  const disabledField = !!emailErrorRegExp || !!emailInBaseError

  return (
    <div className={'registration-form-wrapper'}>
      <form
        onSubmit={handleSubmit}
        className={'registration-form'}
        {...otherProps}
      >
        <h2 className={'registration-form__header'}>Create an account</h2>
        <InputWrapper
          inputEmailRef={inputEmailRef}
          title={'email'}
          value={email}
          label={'Your e-mail:'}
          emailErrorRegExp={emailErrorRegExp}
          emailInBaseError={emailInBaseError}
          onChange={handleChange}
          onBlur={emailErrorRegExpBlur}
        />

        <InputWrapper
          title={'password'}
          value={password}
          label={'Password:'}
          type={'password'}
          errorPassword={passwordErrorRegExp}
          errorsPasswordDetails={passwordErrorDetails}
          disabled={disabledField}
          onChange={handleChange}
          style={{ backgroundColor: disabledField ? `${colors.midVioletBgColor}` : '' }}

        />

        <InputWrapper
          title={'confirmPassword'}
          value={confirmPassword}
          label={'Repeat password:'}
          type={'password'}
          errorConfirmPassword={confirmPasswordError}
          disabled={disabledField}
          onChange={handleChange}
          style={{ backgroundColor: disabledField ? `${colors.midVioletBgColor}` : '' }}
        />
        <Button
          label={'Register'}
          disabled={disabledField}
          style={{ cursor: disabledField ? 'not-allowed' : '' }}
        />

      </form>
    </div>
  )
}

export default PageRegistration
