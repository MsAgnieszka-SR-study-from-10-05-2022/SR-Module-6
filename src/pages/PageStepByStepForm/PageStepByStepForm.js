import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Form, { FormSummary } from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'

const StepNumber = styled.p`
  margin-bottom: 10px;
  text-decoration: underline;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const PageStepByStepForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  // state
  const [step, setStep] = React.useState(1)
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
    notices: ''
  })

  const {
    name,
    age,
    notices
  } = formData

  // default values
  const FormTitles = ['Personal info', 'Age', 'Your notices']

  // functions
  const prevStep = () => {
    setStep((currentStep) => currentStep - 1)
  }
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('FORM SUBMITTED')
    setFormData({
      ...formData,
      name: '',
      age: '',
      notices: ''
    })
    setStep(1)
    console.log('data: ', formData)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      formTitle={'Step by step form'}
      {...otherProps}
    >
      <StepNumber>
        Step {step} - {step < 4 ? FormTitles[step - 1] : 'SUMMARY'}
      </StepNumber>
      {step <= 1 ?
      // step Name
        <Input
          type={'text'}
          placeholder={'What\'s your name?'}
          name={'name'}
          value={name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value })
          }}
        />
        :
        step === 2 ?
        // step Age
          <Input
            type={'number'}
            placeholder={'How old are you?'}
            name={'age'}
            value={age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value })
            }}
          />
          :
          step === 3 ?
          // step Notices
            <Input
              type={'text'}
              placeholder={'You can write here your thoughts...'}
              name={'notices'}
              value={notices}
              onChange={(e) => {
                setFormData({ ...formData, notices: e.target.value })
              }}
            />
            :
            <FormSummary
              name={name}
              age={age}
              notices={notices}
            />
            }
      <ButtonsWrapper>
        <Button
          disabled={step === 1 || step === FormTitles.length + 1}
          onClick={prevStep}
          label={'<< Prev'}
          type={'button'}
        />
        <Button
          label={step === FormTitles.length + 1 ? 'Submit' : 'Next >>'}
          onClick={nextStep}
          type={step === FormTitles.length + 2 ? 'submit' : 'button'}
        />
      </ButtonsWrapper>
    </Form>
  )
}

PageStepByStepForm.propTypes = {
  className: PropTypes.string
}

export default PageStepByStepForm
