import React from 'react'
import AuthBtns from './AuthBtns'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <header className="shadow-sm  mb-3">
      <div className="row bg-w">
        <div className="col-3 pt-3 center">
          <span className="em-20 boldd dodgblue">
            ETSUQ <i className="fas fa-check-circle" />
          </span>
        </div>
        <div className="col pt-3">
          <Searchbar />
        </div>
        <div className="col-3 p-3 text-right">
          <AuthBtns />
        </div>
      </div>
      <div className="x"></div>
    </header>
  )
}

export default Header
