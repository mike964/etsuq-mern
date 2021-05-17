import React from 'react'

const AuthBtns = () => {
  return (
    <span className="x">
      <a
        className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
        href="#signin-modal"
      >
        Log In
      </a>{' '}
      |{' '}
      <a href="/x" className="x">
        Sign Up
      </a>
    </span>
  )
}

export default AuthBtns
