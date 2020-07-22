import { combineReducers, createStore } from 'redux'

import localeReducer from './reducers/locale'
import notificationsReducer from './reducers/notifications'

const reducers = combineReducers({
    locale: localeReducer,
    notifications: notificationsReducer
})

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
