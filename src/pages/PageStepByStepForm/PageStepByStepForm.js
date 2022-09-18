import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import { useForm } from 'react-hook-form'

import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import styled from 'styled-components'

const StepNumber = styled.p`
  margin-bottom: 10px;
  text-decoration: underline;
`

export const PageStepByStepForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  const [step, setStep] = React.useState(1)

  const defaultValueColors = [
    'red',
    'green',
    'blue',
    'yellow',
    'pink',
    'black'
  ]

  const capitalize = (word) => (word && word[0].toUpperCase() + word.slice(1)) || ''

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const resetForm = () => {
    setStep(1)
    console.log('formularz zresetowany')
    // wyzerować dane wprowadzone do formularza
  }

  const sendForm = () => {
    setStep(1)
    console.log('formularz wysłany')
    // wyzerować dane wprowadzone do formularza
    // wyświetlić w konsoli wysłane dane
  }

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={'Step by step form'}
      {...otherProps}
    >
      <StepNumber>
        Step {step}
      </StepNumber>
      {step <= 1 ?
      // zrobić komponent Name
        <>
          <Input
            className={'step-by-step-form__input'}
            placeholder={'What is your name?'}
            // value={nameFromInput}
            type={'text'}
          />
          <Button
            onClick={nextStep}
            label={'Next >>'}
          />
        </>
        :
        step > 1 && step < 3 ?
        // zrobić komponent Age
          <>
            <Input
              placeholder={'How old are you?'}
              // value={ageFromInput}
              type={'number'}
            />
            <div className={'step-by-step-form__buttons'}>
              <Button
                label={'<< Prev'}
                onClick={prevStep}
              />
              <Button
                label={'Next >>'}
                onClick={nextStep}
              />
            </div>
          </>
          :
          step === 3 ?
          // zrobić komponent Color
            <>
              {/* <label>What is your favorite color? */}
              <select
                className={'step-by-step-form__select'}
                // placeholder={'What is your favorite color?'}
                defaultValue={''}
              >
                <option
                  value={''}
                  disabled
                >
                  What is your favorite color?
                </option>
                {defaultValueColors.map((color) => {
                  return <option
                    key={color}
                    value={color}
                         >{capitalize(color)}
                         </option>
                })}
              </select>

              <div className={'step-by-step-form__buttons'}>
                <Button
                  label={'<< Prev'}
                  onClick={prevStep}
                />
                <Button
                  label={'Summary'}
                  onClick={nextStep}
                />
              </div>
            </>
            :
            step === 4 ?
            // zrobić komponent Summary
              <>
                <Button
                  label={'Submit'}
                  onClick={sendForm}
                  // onClick={() => { console.log('submit') }}
                />
                <Button
                  label={'Reset form'}
                  onClick={resetForm}
                  // onClick={() => { console.log('reset wprowadzonych danych') }}
                />
              </>
              : <>
                <p className={'step-by-step-form__summary-data'}>Tutaj będą dane podane w formularzu</p>
                <p className={'step-by-step-form__info-success'}>Form was send</p>
                </>
            }
    </Form>
  )
}

PageStepByStepForm.propTypes = {
  className: PropTypes.string
}

export default PageStepByStepForm
