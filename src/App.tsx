import { ThemeProvider } from '@mui/material'
import MainPage from './components/templates/page'
import ItemsProvider from './shared/items-provider/items-provider'
import theme from './styles/theme'
import '@fontsource/montserrat'
import './App.css'

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
