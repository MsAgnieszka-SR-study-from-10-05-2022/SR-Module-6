import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import 'components/NavLinkItem/NavLinkItem.scss'
import colors from 'universalStyles/colors'

const navLinkStyle = ({ isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  color: isActive ? colors.almostWhiteColor : '',
  backgroundColor: isActive ? colors.mainDarkColor : ''
})

export const NavLinkItem = (props) => {
  const {
    className,
    to,
    linkLabel,
    ...otherProps
  } = props

  return (
    <li
      className={`nav-link-item${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <NavLink
        to={to}
        style={navLinkStyle}
      >
        {linkLabel}
      </NavLink>
    </li>
  )
}

NavLinkItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  linkLabel: PropTypes.string
}

export default NavLinkItem
