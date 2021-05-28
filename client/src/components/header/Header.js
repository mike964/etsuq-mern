import React from 'react'
import AuthBtns from './AuthBtns'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <header className="header mb-3 bg-white box-shadow">
      <div className="row first-row">
        <div className="col-3 center">
          <a href="/" className="navbar-brand em-20 boldd">
            ETSUQ <i className="fas fa-check-circle" />
          </a>
        </div>
        <div className="col py-2">
          <Searchbar />
        </div>
        <div className="col-3 p-33 text-right">
          <AuthBtns />
        </div>
      </div>
      <div className="row second-row">
        <div className="nav-scroller  box-shadow">
          <nav className="nav nav-underline">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
            <a className="nav-link" href="#">
              Register store
            </a>
            <a className="nav-link" href="#">
              Explore
            </a>
            <a className="nav-link" href="#">
              Suggestions
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
            <a className="nav-link" href="#">
              Link
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
