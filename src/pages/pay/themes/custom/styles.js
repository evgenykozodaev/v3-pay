import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
    },
    content: {
    },
    submit: {
        margin: '32px 0',
        display: 'flex',
        justifyContent: 'center'
    },
    submitButton: {
        minWidth: '160px',
        padding: '12px 20px',
        background: 'linear-gradient(0deg, #f8f8f8, #fcfcfc)',
        borderColor: '#eee',
        borderRadius: '24px',
        textTransform: 'initial'
    }
})
