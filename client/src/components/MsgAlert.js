import React from 'react'
import { Alert } from 'react-bootstrap'

const MsgAlert = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

MsgAlert.defaultProps = {
  variant: 'info',
}

export default MsgAlert
