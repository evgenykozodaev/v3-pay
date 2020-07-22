import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme({
    breakpoints: {
        values: {
            mobile: 480,
            tablet: 768,
            laptop: 1025,
            desktop: 1280
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    margin: '0'
                }
            }
        }
    }
})

export { defaultTheme }
