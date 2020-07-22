import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class TextInput extends React.PureComponent {
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
        const { className, label, helperText, placeholder, inputProps, inputLabelProps, variant, margin } = this.props
        const { value } = this.state

        return (
            <TextField
                fullWidth
                className={className}
                label={label}
                helperText={helperText}
                placeholder={placeholder}
                InputLabelProps={inputLabelProps}
                inputProps={inputProps}
                variant={variant}
                margin={margin}
                value={value}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }

    handleChange = (event) => {
        const { onChange, onValidate } = this.props
        const { validated } = this.state

        const value = event.target.value

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
}

TextInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.string,
    placeholder: PropTypes.string,
    inputProps: PropTypes.object,
    variant: PropTypes.string,
    margin: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onValidate: PropTypes.func
}

export default withStyles(styles)(TextInput)
