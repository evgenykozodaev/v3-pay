import { SHOW_ERROR, SHOW_WARNING } from 'store/actions/notifications'

const initialState = {
    errors: [],
    warnings: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                ...state,
                errors: [...state.errors, action.error]
            }

        case SHOW_WARNING:
            return {
                ...state,
                warnings: [...state.warnings, action.warning]
            }

        default:
            return {
                ...state
            }
    }
}
