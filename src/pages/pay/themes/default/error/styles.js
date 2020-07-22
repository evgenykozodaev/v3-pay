import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
        padding: '12px',
        margin: '0 auto',
        [theme.breakpoints.up('mobile')]: {
            maxWidth: '600px',
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px'
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px'
    },
    link: {
        backgroundColor: '#73bed3',
        borderColor: '#73bed3',
        borderRadius: '2px',
        textTransform: 'initial'
    }
})
