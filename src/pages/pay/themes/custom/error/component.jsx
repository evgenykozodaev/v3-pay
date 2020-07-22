import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import ErrorIcon from 'icons/alert.svg'

class Error extends React.PureComponent {
    render() {
        const { localize, classes } = this.props

        return (
            <div className={classes.component}>
                <div className={classes.content}>
                    <img src={ErrorIcon} alt="" width="240px" height="240px" />
                </div>

                <div className={classes.links}>
                    <Button
                        className={classes.link}
                        variant="outlined"
                        onClick={this.handleBackClick}
                    >
                        {localize('app.pages.pay.errorButton')}
                    </Button>
                </div>
            </div>
        )
    }

    handleBackClick = () => {
    }
}

Error.propTypes = {
    localize: PropTypes.func.isRequired
}

export default withStyles(styles)(Error)
