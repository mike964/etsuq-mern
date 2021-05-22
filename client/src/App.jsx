import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/header/Header'
import HomePg from './pages/HomePg'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-5" style={{ minHeight: '600px' }}>
        <div className="container p-5 bg-w">
          <HomePg />
        </div>
      </main>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
