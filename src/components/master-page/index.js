import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import utils from 'common/utils'
import { showError } from 'store/actions/notifications'
import { setLocaleData } from 'store/actions/locale'

import MasterPage from './component'

export const mapStateToProps = (state) => {
    return {
        locale: state.locale.locale,
        localize: (localeKey) => utils.localize(state.locale.localeData, localeKey)
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        setLocaleData: bindActionCreators(setLocaleData, dispatch),
        showError: bindActionCreators(showError, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MasterPage))
