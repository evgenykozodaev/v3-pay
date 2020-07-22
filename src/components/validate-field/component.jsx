import React from 'react';

class ValidatedField extends React.Component {
    constructor(props, context) {
        super(props, context);

        const {
            validator,
            validatedComponent,
            onChangeCallbackName,
            validationErrorPrpos,
            errorMessageField,
            ...other
        } = this.props;

        other[onChangeCallbackName || 'onChange'] = this.handleChange;
        this.defaultComponentProps = other;

        this.state = {
            componentProps: other
        };
    }

    handleChange = (event) => {
        var componentProps;
        const {validator, validationErrorPrpos, errorMessageField} = this.props;
        try {
            validator(event);
            componentProps = this.defaultComponentProps;
        } catch (error) {
            componentProps = {
                ...this.defaultComponentProps,
                ...validationErrorPrpos,
                [errorMessageField]: error,
            };
        }
        this.setState({componentProps});
    }

    render() {
        const {value} = this.props;
        const Component = this.props.validatedComponent;
        return <Component {...this.state.componentProps} value={value}/>;
    }
}

export default ValidatedField
