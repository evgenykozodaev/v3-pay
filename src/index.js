import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import 'common/mirage'
import history from 'common/history'
import store from './store'
import { defaultTheme } from 'styles/themes'
import App from './component'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={{ ...defaultTheme }}>
            <Router history={history}>
                <CssBaseline />
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
