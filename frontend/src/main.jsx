import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './digital/styles/index.css'
import './digital/styles/fonts.css'
import './architecture/styles/index.css'
import './architecture/styles/fonts.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
          <App/>
      </I18nextProvider>
  </React.StrictMode>,
)
