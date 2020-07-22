import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '16px',
        margin: '32px auto 0',
        boxShadow: '0 0 4px 0 #ccc',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: 'linear-gradient(0deg, #f8f8f8, #fcfcfc)',
        '& .MuiInput-underline:before': {
            borderColor: '#ccc'
        }
    },
    logos: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        margin: '8px 0',
        '& > *': {
            marginLeft: '12px'
        }
    },
    error: {
        color: 'red',
        lineHeight: '16px',
        minHeight: '16px',
        margin: '0px'
    },
    cardDateAndHolder: {
        position: 'relative',
        flex: 'auto',
        display: 'flex',
        flexDirection: 'column'
    },
    cardDate: {
        paddingRight: '120px'
    },
    cardDateInput: {
        maxWidth: '120px'
    },
    cardHolder: {
    },
    cardHolderInput: {
        '& input': {
            textTransform: 'uppercase'
        }
    },
    cardCVC: {
        position: 'absolute',
        top: '16px',
        right: '0px',
        maxWidth: '100px'
    }
})
