import { connect } from 'react-redux'

import validate from 'common/validate'
import utils from 'common/utils'
import PayPageTheme from './component'

const mapStateToProps = (state) => {
    const localize = (localeKey) => utils.localize(state.locale.localeData, localeKey)

    return {
        localize,
        validate: validate(localize)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayPageTheme)
