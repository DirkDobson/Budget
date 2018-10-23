import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const theme = {
  blue: '#B0E2FF',
  green: '#D6FFD6',
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>,
    document.getElementById('app') 
)

ReactDOM.render(<App />, document.getElementById('app'))