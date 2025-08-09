import '@fontsource/montserrat'
import './App.css'
import { ThemeProvider, Typography } from '@mui/material'
import theme from './styles/theme'
import Layout from './components/layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Typography variant="h3">Hello World</Typography>
      </Layout>
    </ThemeProvider>
  )
}

export default App
