export const SET_LOCALE = 'SET_LOCALE'
export const SET_LOCALE_DATA = 'SET_LOCALE_DATA'

export const setLocale = (locale) => {
    return {
        type: SET_LOCALE,
        locale: locale.toLowerCase()
    };
};

export const setLocaleData = (localeData) => {
    return {
        type: SET_LOCALE_DATA,
        localeData
    };
};
