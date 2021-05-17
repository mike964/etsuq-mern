import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Searchbar = () => {
  return (
 <InputGroup className="mb-3" size="lg">
    <FormControl
      placeholder="Search for products"
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
