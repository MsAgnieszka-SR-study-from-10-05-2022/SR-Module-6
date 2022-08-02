import React from 'react'

import InputWrapper from 'components/InputWrapper'
import Button from 'components/Button'

import 'pages/PageRegistration/PageRegistration.scss'

export const PageRegistration = (props) => {
  const {
    ...otherProps
  } = props

  const [inputFields, setInputField] = React.useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {
    email,
    password,
    confirmPassword
  } = inputFields

  // eslint-disable-next-line no-unused-vars
  const [emailsDataFromBase, setEmailsDataFromBase] = React.useState([])
  const [emailError, setEmailError] = React.useState(false)

  const [passwordErrorRegExp, setPasswordErrorRegExp] = React.useState(false)
  const [passwordErrorDetails, setPasswordErrorDetail] = React.useState({
    upperCaseLetter: false,
    lowerCaseLetter: false,
    digit: false,
    specialCharacter: false,
    minLength: false
  })

  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false)
  const [isValidForm, setIsValidForm] = React.useState(false)

  // Variables to check the password
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const regExpPasswordToCheck = new RegExp(passwordPattern)
  const upperCaseLetterToCheck = /[A-Z]/
  const lowerCaseLetterToCheck = /[a-z]/
  const digitToCheck = /[0-9]/
  const specialCharacterToCheck = /[@$!%*?&]/

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputField({
      ...inputFields,
      [name]: value
    })
  }

  const getEmailsFromBase = async () => {
    await fetch('/emails.json')
      .then((r) => (r.json()))
      // .then((result) => console.log(result.emails))
      .then((result) => setEmailsDataFromBase(result.emails))
  }

  React.useEffect(() => {
    getEmailsFromBase()
  }, [])

  const checkEmailWithBase = () => {
    setEmailError(() => false)
    if (email !== '' && emailsDataFromBase !== {}) {
      emailsDataFromBase.filter((emailFromBase) => {
        if (email === emailFromBase.email) {
          return setEmailError(() => true)
        }
        return emailFromBase
      })
    }
  }

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

  const checkConfirmPassword = () => {
    if (confirmPassword === '' || password !== confirmPassword) {
      return setConfirmPasswordError(() => true)
    } else {
      return setConfirmPasswordError(() => false)
    }
  }

  const checkValidForm = () => {
    if (email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      !emailError &&
      !passwordErrorRegExp &&
      !confirmPasswordError) {
      return setIsValidForm(() => true)
    } else {
      return setIsValidForm(() => false)
    }
  }

  setTimeout(checkValidForm, 0)

  // const clearForm = () => {
  //   if (isValidForm) {
  //     setInputField({
  //       email: '',
  //       password: '',
  //       confirmPassword: ''
  //     })
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()
    getEmailsFromBase()
    checkEmailWithBase()
    checkPassword()
    checkConfirmPassword()
    checkValidForm()

    if (!isValidForm) console.log('W formularzu są błędy')

    // clearForm() // wyrzuca błąd - czy dlatego że wcześniej 'głębiej' ustalałam setInputField?
    console.log('data: ', inputFields)
  }

  return (
    <div className={'registration-form-wrapper'}>
      <form
        onSubmit={handleSubmit}
        className={'registration-form'}
        {...otherProps}
      >
        <h2 className={'registration-form__header'}>Create an account</h2>
        <InputWrapper
          title={'email'}
          label={'Your e-mail:'}
          onChange={handleChange}
          emailError={emailError}
        />
        <InputWrapper
          title={'password'}
          label={'Password:'}
          type={'password'}
          onChange={handleChange}
          errorPassword={passwordErrorRegExp}
          errorsPasswordDetails={passwordErrorDetails}
        />
        <InputWrapper
          title={'confirmPassword'}
          label={'Repeat password:'}
          type={'password'}
          onChange={handleChange}
          errorConfirmPassword={confirmPasswordError}
        />
        <Button
          label={'Register'}
          // disabled={.......... ? 'disabled' : ''}
        />
      </form>
    </div>
  )
}

export default PageRegistration
