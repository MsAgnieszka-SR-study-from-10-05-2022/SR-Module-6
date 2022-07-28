import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavLinksMenu from 'components/NavLinksMenu'
import NavLinkItem from 'components/NavLinkItem'
import PageRegistration from 'pages/PageRegistration'

import './App.scss'

const App = () => {
  return (
    <>
      <NavLinksMenu>
        <NavLinkItem
          to={'/registration'}
          linkLabel={'Registration'}
        />
        <NavLinkItem
          to={'/step-by-step-form'}
          linkLabel={'Step by step form'}
        />
        <NavLinkItem
          to={'/form-with-captcha'}
          linkLabel={'Form with captcha'}
        />
      </ NavLinksMenu>
      <div>
        <h1 className={'main-header'}>Tasks after module 6</h1>
      </div>
      <Routes>
        <Route
          path={'/registration'}
          // element={<h2>Registration</h2>}
          element={<PageRegistration />}
        />
        <Route
          path={'/step-by-step-form'}
          element={<h2>Stepper Form</h2>}
        />
        <Route
          path={'/form-with-captcha'}
          element={<h2>Form with Captcha</h2>}
          // element={<FormWithCaptcha />}
        />
      </Routes>
    </>
  )
}

export default App
