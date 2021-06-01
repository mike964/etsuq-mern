import React, { Children } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

//=======================================================
const OverText = (props) => {
  const { place, text, hoverText } = props
  return (
    <OverlayTrigger
      placement={place ? place : 'bottom'}
      overlay={<Tooltip id="tooltip-24"> {hoverText} </Tooltip>}
    >
      {props.children}
    </OverlayTrigger>
  )
}

export default OverText
