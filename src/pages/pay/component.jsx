import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import payInfoModel from 'models/payInfo'
import constants from 'common/constants'
import utils from 'common/utils'
import Preloader from 'components/preloader'
import DefaultTheme from './themes/default'
import CustomTheme from './themes/custom'
import styles from './styles'

const CARD_FIELDS = [
    'cardNumber',
    'cardMonth',
    'cardYear',
    'cardDate',
    'cardHolder',
    'cardCVC'
]

const CUSTOMER_FIELDS = [
]

class PayPage extends React.PureComponent {
    constructor(props) {
        super(props)

        const paymentId = props.location.pathname.split('/')[2]

        this.state = {
            paymentId,
            paymentStatus: null,
            interfaceInfo: {},
            paymentState: null,
            paymentStateDetails: null,
            paymentInfo: {},
            cardInfo: {},
            cardInfoErrors: {},
            cardInfoValid: false,
            customerInfo: {},
            customerInfoErrors: {},
            customerInfoValid: true,
            loading: true,
            submitting: false
        }
    }

    componentDidMount() {
        const { locale, setLocale, showError } = this.props
        const { paymentId } = this.state

        utils.fetch(`/payments/${paymentId}`, {
            method: 'GET'
        }).then((data) => {
            const payInfo = payInfoModel(data);
            const interfaceInfo = payInfo.interfaceInfo
            const paymentInfo = payInfo.paymentInfo
            const customerInfo = payInfo.customerInfo
            const stateInfo = payInfo.stateInfo

            this.setState({
                interfaceInfo,
                paymentInfo,
                customerInfo,
                paymentState: stateInfo.name,
                paymentStateDetails: stateInfo.details
            })

            if (interfaceInfo.language && interfaceInfo.language !== locale) {
                setLocale(interfaceInfo.language)
            }
        }).catch((error) => {
            showError(error)

            this.setState({
                paymentState: constants.STATE.ERROR
            })
        }).then(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        const { classes } = this.props

        const contentOutput = this.renderContent()

        return (
            <div className={classes.component}>
                {contentOutput}
            </div>
        )
    }

    renderContent = () => {
        const { loading } = this.state

        if (loading) {
            return <Preloader />
        }

        const { classes } = this.props
        const { submitting, interfaceInfo, paymentInfo, paymentState, paymentStateDetails } = this.state
        const { customerInfo, customerInfoErrors, customerInfoValid } = this.state
        const { cardInfo, cardInfoErrors, cardInfoValid } = this.state
        const { theme } = interfaceInfo

        const valid = cardInfoValid && customerInfoValid

        let component;
        const componentProps = {
            paymentState: paymentState,
            paymentStateDetails: paymentStateDetails,
            paymentInfo: paymentInfo,
            cardInfo: cardInfo,
            cardInfoErrors: cardInfoErrors,
            customerInfo: customerInfo,
            customerInfoErrors: customerInfoErrors,
            valid: valid,
            submitting: submitting,
            onCardFieldsChanged: this.handleCardFieldsChanged,
            onCardFieldsValidated: this.handleCardFieldsValidated,
            onCustomerFieldChanged: this.handleCustomerFieldChanged,
            onCustomerFieldsValidated: this.handleCustomerFieldsValidated,
            onSubmit: this.handleSubmit
        }

        if (theme === 'custom') {
            component = <CustomTheme {...componentProps} />
        } else {
            component = <DefaultTheme {...componentProps} />
        }

        return (
            <div className={classes.content}>
                {component}
            </div>
        )
    }

    handleCardFieldsChanged = (fields) => {
        const { cardInfo } = this.state

        const form = {
            ...cardInfo
        }

        fields.forEach((field) => {
            form[field.fieldName] = field.fieldValue
        })

        this.setState({
            cardInfo: form
        })
    }

    handleCardFieldsValidated = (fields) => {
        const { cardInfo, cardInfoErrors } = this.state

        const result = this.validateFields(fields, cardInfoErrors, cardInfo, CARD_FIELDS)

        this.setState({
            cardInfoErrors: result.errors,
            cardInfoValid: result.valid
        })
    }

    handleCustomerFieldChanged = (fieldName, fieldValue) => {
        const { customerInfo } = this.state

        const form = {
            ...customerInfo,
            [fieldName]: fieldValue
        }

        this.setState({
            customerInfo: form
        })
    }

    handleCustomerFieldsValidated = (fields) => {
        const { customerInfo, customerInfoErrors } = this.state

        const result = this.validateFields(fields, customerInfoErrors, customerInfo, CUSTOMER_FIELDS)

        this.setState({
            customerInfoErrors: result.errors,
            customerInfoValid: result.valid
        })
    }

    handleSubmit = (cardFields, customerFields) => {
        const { showError } = this.props
        const { paymentId } = this.state
        const { cardInfo, cardInfoErrors } = this.state
        const { customerInfo, customerInfoErrors } = this.state

        const cardValidateResult = this.validateFields(cardFields, cardInfoErrors, cardInfo, CARD_FIELDS)
        const customerValidateResult = this.validateFields(customerFields, customerInfoErrors, customerInfo, CUSTOMER_FIELDS)

        this.setState({
            cardInfoErrors: cardValidateResult.errors,
            cardInfoValid: cardValidateResult.valid,
            customerInfoErrors: customerValidateResult.errors,
            customerInfoValid: customerValidateResult.valid
        })

        if (!cardValidateResult.valid || !customerValidateResult.valid) {
            return
        }

        const data = {
            "CustomerInfo": {
                "Country": customerInfo.country,
                "Language": customerInfo.language,
                "Town": customerInfo.town,
                "Address": customerInfo.address,
                "ZIP": customerInfo.zipCode,
                "Phone": customerInfo.phone,
                "Email": customerInfo.email
            },
            "PaymentMethod": "Card",
            "PaymentDetails": {
                "CardholderName": cardInfo.cardHolder,
                "CVC": cardInfo.cardCVC,
                "CardNumber": cardInfo.cardNumber,
                "ExpMonth": cardInfo.cardMonth,
                "ExpYear": cardInfo.cardYear,
            }
        }

        this.setState({
            submitting: true
        })

        utils.fetch(`/payments/${paymentId}`, {
            method: 'POST',
            body: data
        }).then((data) => {
            if (data.error) {
                this.setState({
                    paymentState: constants.STATE.ERROR
                })
            } else {
                this.setState({
                    paymentState: constants.STATE.SUCCESS
                })
            }
        }).catch((error) => {
            showError(error)

            this.setState({
                paymentState: constants.STATE.ERROR
            })
        }).then(() => {
            this.setState({
                submitting: false
            })
        })
    }

    validateFields = (fields, errors, formFields, requiredFields) => {
        const result = {
            errors: {
                ...errors
            }
        }

        fields.forEach((field) => {
            if (field.error !== undefined) {
                result.errors[field.fieldName] = field.error
            } else {
                delete result.errors[field.fieldName]
            }
        })

        const hasErrors = (Object.keys(result.errors).length !== 0)
        const hasEmptyFields = requiredFields.some((fieldName) => {
            return !formFields[fieldName]
        })

        result.valid = !hasErrors && !hasEmptyFields

        return result
    }
}

PayPage.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    locale: PropTypes.string.isRequired,
    localize: PropTypes.func.isRequired,
    setLocale: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired
}

export default withStyles(styles)(PayPage)
