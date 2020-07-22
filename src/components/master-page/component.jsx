import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import utils from 'common/utils'
import Preloader from 'components/preloader'
import styles from './styles'

class MasterPage extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.loadLocale()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.locale !== this.props.locale) {
            this.loadLocale()
        }
    }

    render() {
        const { loading, classes } = this.props

        if (loading) {
            return <Preloader />
        }

        return (
            <>
                {this.props.children}
            </>
        )
    }

    loadLocale = () => {
        const { locale, setLocaleData, showError } = this.props

        this.setState({
            loading: true
        })

        fetch(`/locales/${locale}.json`)
            .then((response) => {
                return response.json()
            })
            .then((localeData) => {
                setLocaleData(localeData)
            }).catch((error) => {
                showError('Unable to load locale data')
            }).then(() => {
                this.setState({
                    loading: false
                })
            })
    }
}

MasterPage.propTypes = {
    locale: PropTypes.string.isRequired,
    localize: PropTypes.func.isRequired,
    setLocaleData: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired
}

export default withStyles(styles)(MasterPage)
