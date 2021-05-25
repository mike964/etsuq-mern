import React from 'react'
import AuthBtns from './AuthBtns'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <header className="header mb-3 bg-white border-bottom box-shadow">
      <div className="row bg-ww bg-dark border-bottom">
        <div className="col-3 pt-3 center">
          <a href="/" className="navbar-brand em-20 boldd white">
            ETSUQ <i className="fas fa-check-circle" />
          </a>
        </div>
        <div className="col pt-3">
          <Searchbar />
        </div>
        <div className="col-3 p-3 text-right">
          <AuthBtns />
        </div>
      </div>
      <div className="row">
        <div className="x">
          <div className="nav-scroller bg-white box-shadow">
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
      </div>
    </header>
  )
}

export default Header
