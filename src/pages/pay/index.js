import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import utils from 'common/utils';
import { setLocale } from 'store/actions/locale'
import { showError } from 'store/actions/notifications'
import PayPage from './component'

const mapStateToProps = (state) => {
    return {
        locale: state.locale.locale,
        localize: (localeKey) => utils.localize(state.locale.localeData, localeKey)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLocale: bindActionCreators(setLocale, dispatch),
        showError: bindActionCreators(showError, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PayPage))
