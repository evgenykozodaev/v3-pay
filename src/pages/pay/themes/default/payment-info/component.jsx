import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class PaymentInfo extends React.PureComponent {
    render() {
        const { localize, classes, paymentInfo } = this.props

        const description = get(paymentInfo, 'description')
        const orderId = get(paymentInfo, 'orderId')
        const amount = get(paymentInfo, 'amount')
        const currency = get(paymentInfo, 'currency')

        return (
            <section className={classes.component}>
                <p>
                    {description}
                </p>
                <p>
                    {localize('app.pages.pay.orderNumber')}: {orderId}
                </p>
                <p>
                    <b>{amount} {currency}</b>
                </p>
            </section>
        )
    }
}

PaymentInfo.propTypes = {
    localize: PropTypes.func.isRequired,
    paymentInfo: PropTypes.shape({
        amount: PropTypes.string,
        orderId: PropTypes.string,
        currency: PropTypes.string,
        description: PropTypes.string
    })
}

export default withStyles(styles)(PaymentInfo)
