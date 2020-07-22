import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
        marginTop: '16px'
    },
    container: {
        flexDirection: 'column'
    },
    error: {
        color: 'red',
        minHeight: '20px'
    }
})
