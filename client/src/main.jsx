import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

// import { Provider } from 'react-redux'
// import store from './redux/store.js';
// import 'primeflex/primeflex.css';

import "primereact/resources/primereact.min.css";
import 'primereact/resources/themes/lara-light-blue/theme.css'
import './flags.css'

import { PrimeReactProvider } from 'primereact/api';
import AuthContextProvider from './context/authContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
