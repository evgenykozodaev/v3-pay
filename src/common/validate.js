import luhn from 'fast-luhn'

export default (localize) => {
    const cardNumber = (value) => {
        let error

        if (value) {
            if (value.length < 8) {
                error = localize('errors.cardNumberTooShort')
            } else if (value.length > 16) {
                error = localize('errors.cardNumberTooLog')
            } else if (!luhn(value)) {
                error = localize('errors.cardNumberLuhn')
            }
        } else {
            error = ''
        }

        return error
    }

    const cardDate = (value) => {
        let error

        if (value) {
            if (value.length < 4) {
                error = localize('errors.cardDateFormat')
            } else {
                const cardMonth = parseInt(value.substr(0, 2))
                const cardYear = parseInt(value.substr(2, 2))

                if (cardMonth < 1 || cardMonth > 12) {
                    error = localize('errors.cardMonthFormat')
                } else {
                    const expDate = new Date(2000 + cardYear, cardMonth)

                    if (expDate < new Date()) {
                        error = localize('errors.cardDateExpired')
                    }
               }
            }
        } else {
            error = ''
        }

        return error
    }

    const cardMonth = (value) => {
        let error

        if (value) {
            if (value.length < 2) {
                error = localize('errors.cardMonthFormat')
            } else {
                const cardMonth = parseInt(value.substr(0, 2))

                if (cardMonth < 1 || cardMonth > 12) {
                    error = localize('errors.cardMonthFormat')
               }
            }
        } else {
            error = ''
        }

        return error
    }

    const cardYear = (value) => {
        let error

        if (value) {
            if (value.length < 2) {
                error = localize('errors.cardYearFormat')
            } else {
                const cardYear = parseInt(value.substr(0, 2))

                if (cardYear < 0 || cardYear > 99) {
                    error = localize('errors.cardYearFormat')
               }
            }
        } else {
            error = ''
        }

        return error
    }

    const cardHolder = (value) => {
        let error

        if (value) {
            if (value.length < 1) {
                error = localize('errors.cardHolderEmpty')
            } else {
                const regex = `^[a-zA-Z]+$`

                if (!value.match(regex)) {
                    error = localize('errors.cardHolderFormat')
                }
            }
        } else {
            error = ''
        }

        return error
    }

    const cardCVC = (value) => {
        let error

        if (value) {
            const regex = `^[0-9]{3}$`

            if (!value.match(regex)) {
                error = localize('errors.cardCVCFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    const customerCountry = (value) => {
        let error

        if (value) {
            const regex = `^[A-Z]{3}$`

            if (!value.match(regex)) {
                error = localize('errors.countryFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    const customerLanguage = (value) => {
        let error

        if (value) {
            const regex = `^[A-Z]{2}$`

            if (!value.match(regex)) {
                error = localize('errors.languageFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    const customerTown = (value) => {
        let error

        if (value) {
            const regex = `^.+$`

            if (!value.match(regex)) {
                error = localize('errors.townFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    const customerAddress = (value) => {
    }

    const customerZipCode = (value) => {
        let error

        if (value) {
            const regex = `^.+$`

            if (!value.match(regex)) {
                error = localize('errors.zipCodeFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    const customerPhone = (value) => {
        let error

        if (value) {
            const regex = `^.+$`

            if (!value.match(regex)) {
                error = localize('errors.phoneFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    const customerEmail = (value) => {
        let error

        if (value) {
            const regex = `^.+$`

            if (!value.match(regex)) {
                error = localize('errors.emailFormat')
            }
        } else {
            error = ''
        }

        return error
    }

    return {
        cardNumber,
        cardDate,
        cardMonth,
        cardYear,
        cardHolder,
        cardCVC,
        customerCountry,
        customerLanguage,
        customerTown,
        customerAddress,
        customerZipCode,
        customerPhone,
        customerEmail
    }
}
