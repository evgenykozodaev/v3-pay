import localeData from 'locales/en.json'
import constants from 'common/constants'
import { SET_LOCALE, SET_LOCALE_DATA } from 'store/actions/locale'

const initialState = {
    locale: constants.LOCALE.EN,
    localeData: localeData
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCALE:
            return {
                ...state,
                locale: action.locale
            }

        case SET_LOCALE_DATA:
            return {
                ...state,
                localeData: action.localeData
            }

        default:
            return {
                ...state
            }
    }
}
