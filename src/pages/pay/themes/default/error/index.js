import { connect } from 'react-redux'

import utils from 'common/utils';
import Error from './component'

const mapStateToProps = (state) => {
    return {
        localize: (localeKey) => utils.localize(state.locale.localeData, localeKey)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)
