import React from 'react'

import PropTypes from 'prop-types'

export const FormSummary = (props) => {
  const {
    name,
    age,
    notices
  } = props
  return (

    <div>
      <h3 style={{ marginBottom: '5px' }}>Your answers:</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Notices: {notices}</p>
    </div>
  )
}

FormSummary.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  notices: PropTypes.string
}

export default FormSummary
