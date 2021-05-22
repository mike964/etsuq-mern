import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
// import './styles/global.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles/bootstrap-fix.css'
import './styles/index.css'
import './styles/style.css'
import './styles/colors.css'
import './styles/w3-styles.css'
import './styles/navbar.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
