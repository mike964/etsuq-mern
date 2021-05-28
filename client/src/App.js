import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/header/Header'
import HomePg from './pages/HomePg'
import ProductPg from './pages/ProductPg'

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '600px' }}>
        <div className="container py-5">
          {/* <HomePg /> */}
          <Route path="/" component={HomePg} exact />
          <Route path="/product/:slug/:code" component={ProductPg} />
        </div>
      </main>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
