import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {registerLicense} from '@syncfusion/ej2-base'

registerLicense("Ngo9BigBOggjHTQxAR8/V1JGaF5cXGpCfUx3WmFZfVhgcV9DYlZURGYuP1ZhSXxVdkRgWX9bdXZQQGFfU0F9XEA=");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
