import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const LangDropdown = () => {
  return (
    <NavDropdown
      title="Language"
      id="basic-nav-dropdown"
      // className="white-link"
    >
      <NavDropdown.Item href="#action/3.1">العربیة</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
    </NavDropdown>
  )
}

export default LangDropdown
