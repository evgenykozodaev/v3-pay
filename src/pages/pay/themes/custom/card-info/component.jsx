import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core/styles'

import TextInput from 'components/text-input'
import NumberInput from 'components/number-input'
import styles from './styles'
import VisaIcon from 'icons/visa.svg'
import MasterCardIcon from 'icons/master-card.svg'
import MaestroIcon from 'icons/maestro.svg'
import MirIcon from 'icons/mir.svg'

class CardInfo extends React.PureComponent {
    render() {
        const { form, errors, localize, classes } = this.props

        return (
            <div className={classes.component}>
                <div className={classes.logos}>
                    <img src={VisaIcon} alt="" height="20px" />
                    <img src={MasterCardIcon} alt="" height="20px" />
                    <img src={MaestroIcon} alt="" height="20px" />
                    <img src={MirIcon} alt="" height="20px" />
                </div>

                <FormControl fullWidth>
                    <NumberInput
                        mask="#### #### #### ####"
                        label={localize('app.pages.pay.cardNumber')}
                        inputProps={{
                            autoComplete: "cc-number",
                            inputMode: "numeric"
                        }}
                        value={form.cardNumber}
                        onChange={this.handleCardNumberChange}
                        onValidate={this.handleCardNumberValidate}
                    />
                    <FormHelperText className={classes.error}>
                      {errors.cardNumber}
                    </FormHelperText>
                </FormControl>

                <div className={classes.cardDateAndHolder}>
                    <FormControl className={classes.cardDate}>
                        <NumberInput
                            fullWidth
                            margin="normal"
                            className={classes.cardDateInput}
                            placeholder="00 / 00"
                            format="## / ##"
                            mask={[' ', ' ', ' ', ' ']}
                            label={localize('app.pages.pay.monthAndYear')}
                            inputProps={{
                                autoComplete: "cc-exp",
                                inputMode: "numeric"
                            }}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={form.cardDate}
                            onChange={this.handleCardDateChange}
                            onValidate={this.handleCardDateValidate}
                        />
                        <FormHelperText className={classes.error}>
                          {errors.cardDate}
                        </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth className={classes.cardHolder}>
                        <TextInput
                            className={classes.cardHolderInput}
                            label={localize('app.pages.pay.cardHolder')}
                            inputProps={{
                                autoComplete: "cc-name",
                                maxLength: 26
                            }}
                            value={form.cardHolder}
                            onChange={this.handleCardHolderChange}
                            onValidate={this.handleCardHolderValidate}
                        />
                        <FormHelperText className={classes.error}>
                          {errors.cardHolder}
                        </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth className={classes.cardCVC}>
                        <NumberInput
                            placeholder="CVV"
                            mask="###"
                            label={localize('app.pages.pay.code')}
                            inputProps={{
                                type: "password",
                                autoComplete: "cc-csc",
                                inputMode: "numeric"
                            }}
                            inputLabelProps={{
                                shrink: true
                            }}
                            value={form.cardCVC}
                            onChange={this.handleCardCVCChange}
                            onValidate={this.handleCardCVCValidate}
                        />
                        <FormHelperText className={classes.error}>
                          {errors.cardCVC}
                        </FormHelperText>
                    </FormControl>
                </div>
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

    handleCardDateChange = (value) => {
        const { onFieldsChanged } = this.props

        onFieldsChanged([
            { fieldName: 'cardMonth', fieldValue: value.substr(0, 2) },
            { fieldName: 'cardYear', fieldValue: value.substr(2, 2) },
            { fieldName: 'cardDate', fieldValue: value}
        ])
    }

    handleCardDateValidate = (value) => {
        const { onCardDateValidate } = this.props

        onCardDateValidate(value)
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
    onCardDateValidate: PropTypes.func.isRequired,
    onCardHolderValidate: PropTypes.func.isRequired,
    onCardCVCValidate: PropTypes.func.isRequired
}

export default withStyles(styles)(CardInfo)
