import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class NotFoundPage extends React.PureComponent {
    render() {
        const { localize, classes } = this.props

        return (
            <div className={classes.component}>
                not found page
            </div>
        )
    }
}

NotFoundPage.propTypes = {
    localize: PropTypes.func.isRequired
}

export default withStyles(styles)(NotFoundPage)
