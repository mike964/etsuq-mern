import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Searchbar = () => {
  return (
    <InputGroup className="x" size="lg">
      <FormControl
        placeholder={'ابحث عن منتج'}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary bg-sandy text-dark">
          <i className="fas fa-search" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default Searchbar
