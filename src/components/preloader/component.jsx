import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './styles'

class Preloader extends React.PureComponent {

    render() {
        const { classes } = this.props

        return (
            <div className={classes.component}>
                <CircularProgress size="80px" />
            </div>
        )
    }
}

Preloader.propTypes = {
}

export default withStyles(styles)(Preloader)
