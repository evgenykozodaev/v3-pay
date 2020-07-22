import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import SuccessIcon from 'icons/success.svg'

class Success extends React.PureComponent {
    render() {
        const { localize, classes } = this.props

        return (
            <div className={classes.component}>
                <div className={classes.content}>
                    <img src={SuccessIcon} alt="" width="240px" height="240px" />
                </div>

                <div className={classes.links}>
                    <Button
                        className={classes.link}
                        variant="outlined"
                        onClick={this.handleBackClick}
                    >
                        {localize('app.pages.pay.successButton')}
                    </Button>
                </div>
            </div>
        )
    }

    handleBackClick = () => {
    }
}

Success.propTypes = {
    localize: PropTypes.func.isRequired
}

export default withStyles(styles)(Success)
