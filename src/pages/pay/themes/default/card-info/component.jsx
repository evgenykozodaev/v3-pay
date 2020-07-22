import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core/styles'

import TextInput from 'components/text-input'
import NumberInput from 'components/number-input'
import styles from './styles'

class CardInfo extends React.PureComponent {
    render() {
        const { form, errors, localize, classes } = this.props

        return (
            <div className={classes.component}>
                <div className={classes.left}>
                    <FormControl fullWidth>
                        <NumberInput
                            placeholder={localize('app.pages.pay.cardNumber')}
                            mask="#### #### #### ####"
                            inputProps={{
                                autoComplete: "cc-number",
                                inputMode: "numeric"
                            }}
                            fullWidth
                            value={form.cardNumber}
                            onChange={this.handleCardNumberChange}
                            onValidate={this.handleCardNumberValidate}
                        />
                        <FormHelperText className={classes.error}>
                          {errors.cardNumber}
                        </FormHelperText>
                    </FormControl>

                    <div className={classes.cardDate}>
                        <div className={classes.cardDates}>
                            <div className={classes.cardValidText}>{localize('app.pages.pay.validThru')}</div>

                            <FormControl fullWidth className={classes.cardMonth}>
                                <NumberInput
                                    placeholder="MM"
                                    format="##"
                                    mask={[' ', ' ']}
                                    inputProps={{
                                        autoComplete: "cc-exp-month",
                                        inputMode: "numeric"
                                    }}
                                    fullWidth
                                    value={form.cardMonth}
                                    onChange={this.handleCardMonthChange}
                                    onValidate={this.handleCardMonthValidate}
                                />
                            </FormControl>

                            <div className={classes.cardValidText}> / </div>

                            <FormControl fullWidth className={classes.cardYear}>
                                <NumberInput
                                    placeholder="YY"
                                    format="##"
                                    mask={[' ', ' ']}
                                    inputProps={{
                                        autoComplete: "cc-exp-year",
                                        inputMode: "numeric"
                                    }}
                                    fullWidth
                                    value={form.cardYear}
                                    onChange={this.handleCardYearChange}
                                    onValidate={this.handleCardYearValidate}
                                />
                            </FormControl>
                        </div>

                        <div className={classes.errors}>
                            <FormHelperText className={classes.error}>
                              {errors.cardMonth}
                            </FormHelperText>
                            <FormHelperText className={classes.error}>
                              {errors.cardYear}
                            </FormHelperText>
                            <FormHelperText className={classes.error}>
                              {errors.cardDate}
                            </FormHelperText>
                        </div>
                    </div>

                    <FormControl fullWidth className={classes.cardHolder}>
                        <TextInput
                            className={classes.cardHolderInput}
                            placeholder=""
                            inputProps={{
                                autoComplete: "cc-name",
                                maxLength: 26
                            }}
                            fullWidth
                            value={form.cardHolder}
                            onChange={this.handleCardHolderChange}
                            onValidate={this.handleCardHolderValidate}
                        />
                        <FormHelperText className={classes.error}>
                          {errors.cardHolder}
                        </FormHelperText>
                    </FormControl>
                </div>

                <FormControl fullWidth className={classes.cardCVC}>
                    <div className={classes.cardCVCContent}>
                        <div className={classes.cardCVCBorder} />

                        <NumberInput
                            className={classes.cardCVCInput}
                            placeholder="CVC"
                            mask="###"
                            helperText={localize("app.pages.pay.cvcFormat")}
                            inputProps={{
                                type: "password",
                                autoComplete: "cc-csc",
                                inputMode: "numeric"
                            }}
                            fullWidth
                            value={form.cardCVC}
                            onChange={this.handleCardCVCChange}
                            onValidate={this.handleCardCVCValidate}
                        />
                        <FormHelperText className={classes.error}>
                          {errors.cardCVC}
                        </FormHelperText>
                    </div>
                </FormControl>
            </div>
        )
    }

    handleCardNumberChange = (value) => {
        const { onFieldsChanged } = this.props

        onFieldsChanged([{ fieldName: 'cardNumber', fieldValue: value }])
    }

    handleCardNumberValidate = (value) => {
        const { onCardNumberValidate } = this.props

        onCardNumberValidate(value)
    }

    handleCardMonthChange = (value) => {
        const { form, onFieldsChanged } = this.props

        onFieldsChanged([
            { fieldName: 'cardMonth', fieldValue: value },
            { fieldName: 'cardDate', fieldValue: value + form.cardYear}
        ])
    }

    handleCardMonthValidate = (value) => {
        const { onCardMonthValidate } = this.props

        onCardMonthValidate(value)
    }

    handleCardYearChange = (value) => {
        const { form, onFieldsChanged } = this.props

        onFieldsChanged([
            { fieldName: 'cardYear', fieldValue: value },
            { fieldName: 'cardDate', fieldValue: form.cardMonth + value}
        ])
    }

    handleCardYearValidate = (value) => {
        const { onCardYearValidate } = this.props

        onCardYearValidate(value)
    }

    handleCardHolderChange = (value) => {
        const { onFieldsChanged } = this.props

        onFieldsChanged([{ fieldName: 'cardHolder', fieldValue: value }])
    }

    handleCardHolderValidate = (value) => {
        const { onCardHolderValidate } = this.props

        onCardHolderValidate(value)
    }

    handleCardCVCChange = (value) => {
        const { onFieldsChanged } = this.props

        onFieldsChanged([{ fieldName: 'cardCVC', fieldValue: value }])
    }

    handleCardCVCValidate = (value) => {
        const { onCardCVCValidate } = this.props

        onCardCVCValidate(value)
    }
}

CardInfo.propTypes = {
    form: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    validate: PropTypes.object.isRequired,
    localize: PropTypes.func.isRequired,
    onFieldsChanged: PropTypes.func.isRequired,
    onCardNumberValidate: PropTypes.func.isRequired,
    onCardMonthValidate: PropTypes.func.isRequired,
    onCardYearValidate: PropTypes.func.isRequired,
    onCardHolderValidate: PropTypes.func.isRequired,
    onCardCVCValidate: PropTypes.func.isRequired
}

export default withStyles(styles)(CardInfo)
