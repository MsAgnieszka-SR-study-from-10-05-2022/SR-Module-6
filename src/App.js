import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavLinksMenu from 'components/NavLinksMenu'
import NavLinkItem from 'components/NavLinkItem'

import PageRegistration from 'pages/PageRegistration'
import PageStepByStepForm from 'pages/PageStepByStepForm'

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
          element={<PageRegistration />}
        />
        <Route
          path={'/step-by-step-form'}
          element={<PageStepByStepForm />}
        />
        <Route
          path={'/form-with-captcha'}
          element={<h2>Form with Captcha</h2>}
          // element={<FormWithCaptcha />}
        />
        <Route
          path={'/*'}
          element={<p>Select the form - on navigation bar above - which you would like to see</p>}
        />
      </Routes>
    </>
  )
}

export default App
