import React from 'react'
import PropTypes from 'prop-types'

import 'components/NavLinksMenu/NavLinksMenu.scss'

export const NavLinksMenu = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <nav
      className={`nav-links-menu${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <ul className={'nav-links-menu__list'}>
        {children}
      </ul>
    </nav>
  )
}

NavLinksMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavLinksMenu
