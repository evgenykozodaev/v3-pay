import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
    },
    content: {
    },
    submit: {
        margin: '32px 0',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    submitButton: {
        minWidth: '160px',
        lineHeight: 'initial',
        padding: '12px',
        color: '#fff',
        backgroundColor: '#73bed3',
        borderColor: '#73bed3',
        borderRadius: '2px',
        textTransform: 'initial'
    }
})
