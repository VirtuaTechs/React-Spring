import { createRoot } from 'react-dom/client'
import * as React from 'react'
import './styles/styles.css'
import App from './scripts/App'

const rootElement = document.getElementById('root');
createRoot(rootElement as Element).render(<App />)
