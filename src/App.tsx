import '@fontsource/montserrat'
import './App.css'
import { ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import ItemsProvider from './shared/items-provider/items-provider'
import MainPage from './components/templates/page'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ItemsProvider>
        <MainPage />
      </ItemsProvider>
    </ThemeProvider>
  )
}

export default App
