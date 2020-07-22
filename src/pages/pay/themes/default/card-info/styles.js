import { createStyles } from '@material-ui/core/styles'

export default (theme) => createStyles({
    component: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& input': {
            backgroundColor: '#fff',
            padding: '8px 10px'
        },
        [theme.breakpoints.up('mobile')]: {
            margin: '32px 140px 64px auto'
        }
    },
    left: {
        zIndex: 1,
        width: '100%',
        backgroundColor: '#606467',
        padding: '80px 16px 16px 16px',
        borderRadius: '8px',
        boxShadow: '0 0 4px 0 #777'
    },
    errors: {
        display: 'flex',
        flexWrap: 'wrap'
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
    cardValidText: {
        color: '#fff',
        margin: '0 12px'
    },
    cardDate: {
    },
    cardMonth: {
        maxWidth: '48px'
    },
    cardYear: {
        maxWidth: '48px'
    },
    cardDates: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
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
    cardCVCContent: {
        maxWidth: '140px',
        padding: '80px 20px'
    },
    cardCVCBorder: {
        position: 'absolute',
        top: '32px',
        left: '0',
        width: '100%',
        height: '40px',
        backgroundColor: '#606467',
    },
    cardCVC: {
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: '#e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 0 4px 0 #777',
        marginTop: '16px',
        [theme.breakpoints.up('mobile')]: {
            position: 'absolute',
            right: '-140px',
            left: '140px',
            top: '16px',
            bottom: '-32px',
            width: 'initial',
        }
    },
    cardCVCInput: {
        '& .MuiFormHelperText-root': {
            marginLeft: '0',
            marginRight: '0',
            fontSize: '10px'
        }
    }
})
