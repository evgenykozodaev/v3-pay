import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'

import TextInput from 'components/text-input'
import styles from './styles'

class CustomerInfo extends React.PureComponent {
    render() {
        const { form, errors, localize, classes } = this.props

        return (
            <div className={classes.component}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        {localize('app.pages.pay.customerInfo')}
                    </AccordionSummary>
                    <AccordionDetails className={classes.container}>
                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.country')}
                                inputProps={{
                                    autoComplete: "shipping country"
                                }}
                                value={form.country}
                                onChange={this.handleCountryChange}
                                onValidate={this.handleCountryValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.country}
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.language')}
                                value={form.language}
                                onChange={this.handleLanguageChange}
                                onValidate={this.handleLanguageValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.language}
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.town')}
                                inputProps={{
                                    autoComplete: "shipping address-level2"
                                }}
                                value={form.town}
                                onChange={this.handleTownChange}
                                onValidate={this.handleTownValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.town}
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.address')}
                                inputProps={{
                                    autoComplete: "shipping street-address"
                                }}
                                value={form.address}
                                onChange={this.handleAddressChange}
                                onValidate={this.handleAddressValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.address}
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.zip')}
                                inputProps={{
                                    autoComplete: "shipping postal-code"
                                }}
                                value={form.zipCode}
                                onChange={this.handleZipCodeChange}
                                onValidate={this.handleZipCodeValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.zipCode}
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.phone')}
                                inputProps={{
                                    autoComplete: "tel"
                                }}
                                value={form.phone}
                                onChange={this.handlePhoneChange}
                                onValidate={this.handlePhoneValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.phone}
                            </FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
                            <TextInput
                                label={localize('app.pages.pay.email')}
                                inputProps={{
                                    autoComplete: "email"
                                }}
                                value={form.email}
                                onChange={this.handleEmailChange}
                                onValidate={this.handleEmailValidate}
                            />
                            <FormHelperText className={classes.error}>
                              {errors.email}
                            </FormHelperText>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </div>
        )
    }

    handleCountryChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('country', value)
    }

    handleCountryValidate = (value) => {
        const { onCountryValidate } = this.props

        onCountryValidate(value)
    }

    handleLanguageChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('language', value)
    }

    handleLanguageValidate = (value) => {
        const { onLanguageValidate } = this.props

        onLanguageValidate(value)
    }

    handleTownChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('town', value)
    }

    handleTownValidate = (value) => {
        const { onTownValidate } = this.props

        onTownValidate(value)
    }

    handleAddressChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('address', value)
    }

    handleAddressValidate = (value) => {
        const { onAddressValidate } = this.props

        onAddressValidate(value)
    }

    handleZipCodeChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('zipCode', value)
    }

    handleZipCodeValidate = (value) => {
        const { onZipCodeValidate } = this.props

        onZipCodeValidate(value)
    }

    handlePhoneChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('phone', value)
    }

    handlePhoneValidate = (value) => {
        const { onPhoneValidate } = this.props

        onPhoneValidate(value)
    }

    handleEmailChange = (value) => {
        const { onFieldChanged } = this.props

        onFieldChanged('email', value)
    }

    handleEmailValidate = (value) => {
        const { onEmailValidate } = this.props

        onEmailValidate(value)
    }
}

CustomerInfo.propTypes = {
    form: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    validate: PropTypes.object.isRequired,
    localize: PropTypes.func.isRequired,
    onFieldChanged: PropTypes.func.isRequired,
    onCountryValidate: PropTypes.func.isRequired,
    onLanguageValidate: PropTypes.func.isRequired,
    onTownValidate: PropTypes.func.isRequired,
    onAddressValidate: PropTypes.func.isRequired,
    onZipCodeValidate: PropTypes.func.isRequired,
    onPhoneValidate: PropTypes.func.isRequired,
    onEmailValidate: PropTypes.func.isRequired
}

export default withStyles(styles)(CustomerInfo)
