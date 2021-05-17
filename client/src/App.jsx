import React from 'react'
import Main from './components/Main'
import Header from './components/header/Header'
import HomePg from './pages/HomePg'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container-fluid p--5 bg-w">
        <HomePg />
      </div>
    </div>
  )
}

export default App
