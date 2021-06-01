import React from 'react'
import { NavDropdown } from 'react-bootstrap'

// Currency dropdown [usd, iqd]
const CurrDropdown = () => {
  return (
    <NavDropdown
      title="Language"
      id="basic-nav-dropdown"
      //className="white-link"
    >
      <NavDropdown.Item href="#action/3.1">دولار امریکی</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">دینار عراقي</NavDropdown.Item>
    </NavDropdown>
  )
}

export default CurrDropdown
