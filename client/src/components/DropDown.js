import React from 'react'

// ** Bootstrap dropdown wich also works when hover
const DropDown = ( { label, items } ) => {

  return <div className="dropdown py-2">
    <span className=" dropdown-togglee" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      { label ? label : 'dropdown' } { ' ' }<i className="fas fa-caret-down" />

    </span>
    <div className="dropdown-menu" aria-labelledby="dropdownMenu1" >
      { !items
        ? <a className="dropdown-item" href="#!"> no items </a>
        : <>
          { items.map( item => <a href="#!" className="dropdown-item capitalize">{ item }</a> ) }
        </> }

    </div>
  </div>


}

export default DropDown
