import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import NumberFormat from 'react-number-format'

import styles from './styles'

class NumberInput extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            value: props.value || '',
            validated: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { value } = this.state
        const newValue = this.props.value || ''

        if (newValue !== value) {
            this.setState({
                value: newValue
            })
        }
    }

    render() {
        const { className, label, helperText, format, mask, placeholder, inputProps, inputLabelProps, variant, margin } = this.props
        const { value } = this.state

        return (
            <NumberFormat
                fullWidth
                className={className}
                customInput={TextField}
                label={label}
                placeholder={placeholder}
                helperText={helperText}
                format={format || this.getFormat}
                mask={mask}
                InputLabelProps={inputLabelProps}
                inputProps={inputProps}
                variant={variant}
                margin={margin}
                value={value}
                onValueChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }

    handleChange = (values) => {
        const { onChange, onValidate } = this.props
        const { validated } = this.state

        const { value } = values

        this.setState({
            value
        })

        if (onChange) {
            onChange(value)
        }

        if (validated && onValidate) {
            onValidate(value)
        }
    }

    handleBlur = () => {
        const { onValidate } = this.props
        const { value } = this.state

        if (onValidate) {
            onValidate(value)
        }

        this.setState({
            validated: true
        })
    }

    getFormat = (value) => {
        const { mask } = this.props

        let maskedValue = mask
        let lastIndex = -1
        const symbols = value.split('');

        for (let i = 0; i < symbols.length; i++) {
            const symbol = symbols[i]
            const index = maskedValue.indexOf('#')

            if (index > -1) {
                maskedValue = maskedValue.substring(0, index) + symbol + maskedValue.substring(index + 1)
                lastIndex = index
            } else {
                break
            }
        }

        return maskedValue.substring(0, lastIndex + 1)
    }
}

NumberInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.string,
    placeholder: PropTypes.string,
    inputProps: PropTypes.object,
    inputLabelProps: PropTypes.object,
    variant: PropTypes.string,
    margin: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onValidate: PropTypes.func
}

export default withStyles(styles)(NumberInput)
