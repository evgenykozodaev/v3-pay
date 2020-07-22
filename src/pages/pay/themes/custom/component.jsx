import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import constants from 'common/constants'
import PaymentInfo from './payment-info'
import CardInfo from './card-info'
import CustomerInfo from './customer-info'
import Success from './success'
import Error from './error'
import styles from './styles'

class PayPageThemeCustom extends React.PureComponent {
    render() {
        const { classes, paymentInfo, paymentState, paymentStateDetails } = this.props

        let contentOutput

        if (paymentState === constants.STATE.ERROR) {
            contentOutput = <Error />
        } else if (paymentState === constants.STATE.SUCCESS) {
            contentOutput = <Success />
        } else {
            contentOutput = this.renderNew()
        }

        return (
            <div className={classes.component}>
                <PaymentInfo paymentInfo={paymentInfo} paymentStateDetails={paymentStateDetails} />
                {contentOutput}
            </div>
        )
    }

    renderNew = () => {
        const { classes, localize, valid, submitting } = this.props
        const { cardInfo, cardInfoErrors } = this.props
        const { customerInfo, customerInfoErrors } = this.props

        return (
            <>
                <CardInfo
                    form={cardInfo}
                    errors={cardInfoErrors}
                    onFieldsChanged={this.handleCardFieldsChanged}
                    onCardNumberValidate={this.handleCardNumberValidate}
                    onCardDateValidate={this.handleCardDateValidate}
                    onCardHolderValidate={this.handleCardHolderValidate}
                    onCardCVCValidate={this.handleCardCVCValidate}
                />

                <CustomerInfo
                    form={customerInfo}
                    errors={customerInfoErrors}
                    onFieldChanged={this.handleCustomerFieldChanged}
                    onCountryValidate={this.handleCustomerCountryValidate}
                    onLanguageValidate={this.handleCustomerLanguageValidate}
                    onTownValidate={this.handleCustomerTownValidate}
                    onAddressValidate={this.handleCustomerAddressValidate}
                    onZipCodeValidate={this.handleCustomerZipCodeValidate}
                    onPhoneValidate={this.handleCustomerPhoneValidate}
                    onEmailValidate={this.handleCustomerEmailValidate}
                />

                <div className={classes.submit}>
                    <Button
                        className={classes.submitButton}
                        variant="outlined"
                        disabled={!valid || submitting}
                        onClick={this.handleSubmit}
                    >
                      {localize('app.pages.pay.submit')}
                    </Button>
                </div>
            </>
        )
    }

    handleCardFieldsChanged = (fields) => {
        const { onCardFieldsChanged } = this.props

        onCardFieldsChanged(fields)
    }

    handleCardNumberValidate = (value) => {
        const { onCardFieldsValidated } = this.props

        const error = this.validateCardNumber(value)

        onCardFieldsValidated([{ fieldName: 'cardNumber', error }])
    }

    handleCardDateValidate = (value) => {
        const { onCardFieldsValidated } = this.props

        const error = this.validateCardDate(value)

        onCardFieldsValidated([
            { fieldName: 'cardMonth', error: undefined },
            { fieldName: 'cardYear', error: undefined },
            { fieldName: 'cardDate', error: error }
        ])
    }

    handleCardHolderValidate = (value) => {
        const { onCardFieldsValidated } = this.props

        const error = this.validateCardHolder(value)

        onCardFieldsValidated([{ fieldName: 'cardHolder', error }])
    }

    handleCardCVCValidate = (value) => {
        const { onCardFieldsValidated } = this.props

        const error = this.validateCardCVC(value)

        onCardFieldsValidated([{ fieldName: 'cardCVC', error }])
    }

    handleCustomerFieldChanged = (fieldName, fieldValue) => {
        const { onCustomerFieldChanged } = this.props

        onCustomerFieldChanged(fieldName, fieldValue)
    }

    handleCustomerCountryValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerCountry(value)

        onCustomerFieldsValidated([{ fieldName: 'country', error }])
    }

    handleCustomerLanguageValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerLanguage(value)

        onCustomerFieldsValidated([{ fieldName: 'language', error }])
    }

    handleCustomerTownValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerTown(value)

        onCustomerFieldsValidated([{ fieldName: 'town', error }])
    }

    handleCustomerAddressValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerAddress(value)

        onCustomerFieldsValidated([{ fieldName: 'address', error }])
    }

    handleCustomerZipCodeValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerZipCode(value)

        onCustomerFieldsValidated([{ fieldName: 'zipCode', error }])
    }

    handleCustomerPhoneValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerPhone(value)

        onCustomerFieldsValidated([{ fieldName: 'phone', error }])
    }

    handleCustomerEmailValidate = (value) => {
        const { onCustomerFieldsValidated } = this.props

        const error = this.validateCustomerEmail(value)

        onCustomerFieldsValidated([{ fieldName: 'email', error }])
    }

    handleSubmit = () => {
        const { cardInfo, onSubmit } = this.props

        const cardFields = [
            { fieldName: 'cardNumber', error: this.validateCardNumber(cardInfo.cardNumber) },
            { fieldName: 'cardDate', error: this.validateCardDate(cardInfo.cardDate) },
            { fieldName: 'cardHolder', error: this.validateCardHolder(cardInfo.cardHolder) },
            { fieldName: 'cardCVC', error: this.validateCardCVC(cardInfo.cardCVC) }
        ]

        const customerFields = [
        ]

        onSubmit(cardFields, customerFields)
    }

    validateCardNumber = (value) => {
        const { validate } = this.props

        return validate.cardNumber(value)
    }

    validateCardDate = (value) => {
        const { validate } = this.props

        return validate.cardDate(value)
    }

    validateCardHolder = (value) => {
        const { validate } = this.props

        return validate.cardHolder(value)
    }

    validateCardCVC = (value) => {
        const { validate } = this.props

        return validate.cardCVC(value)
    }

    validateCustomerCountry = (value) => {
        const { validate } = this.props

        return validate.customerCountry(value)
    }

    validateCustomerLanguage = (value) => {
        const { validate } = this.props

        return validate.customerLanguage(value)
    }

    validateCustomerTown = (value) => {
        const { validate } = this.props

        return validate.customerTown(value)
    }

    validateCustomerAddress = (value) => {
        const { validate } = this.props

        return validate.customerAddress(value)
    }

    validateCustomerZipCode = (value) => {
        const { validate } = this.props

        return validate.customerZipCode(value)
    }

    validateCustomerPhone = (value) => {
        const { validate } = this.props

        return validate.customerPhone(value)
    }

    validateCustomerEmail = (value) => {
        const { validate } = this.props

        return validate.customerEmail(value)
    }
}

PayPageThemeCustom.propTypes = {
    paymentState: PropTypes.string,
    paymentStateDetails: PropTypes.string,
    paymentInfo: PropTypes.object.isRequired,
    cardInfo: PropTypes.object.isRequired,
    cardInfoErrors: PropTypes.object.isRequired,
    customerInfo: PropTypes.object.isRequired,
    customerInfoErrors: PropTypes.object.isRequired,
    valid: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    validate: PropTypes.object.isRequired,
    localize: PropTypes.func.isRequired,
    onCardFieldsChanged: PropTypes.func.isRequired,
    onCardFieldsValidated: PropTypes.func.isRequired,
    onCustomerFieldChanged: PropTypes.func.isRequired,
    onCustomerFieldsValidated: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(PayPageThemeCustom)
