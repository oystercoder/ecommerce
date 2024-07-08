import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from './components/context/Productcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider>
  
  <Provider>

    <App />
    </Provider>
   
  
)
