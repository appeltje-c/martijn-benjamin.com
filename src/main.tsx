import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'
import theme from './styles'
import { ThemeProvider } from '@mui/material/styles'

import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { Tinker } from 'tinker-tools'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Tinker hidden={true} />
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>
)
