import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
        minHeight: '100vh',
        backgroundColor: '#fff'
    },
    content: {
        padding: '12px',
        [theme.breakpoints.up('mobile')]: {
            maxWidth: '600px',
            margin: '0 auto'
        },
        [theme.breakpoints.up('laptop')]: {
        },
        [theme.breakpoints.up('desktop')]: {
        }
    }
})
