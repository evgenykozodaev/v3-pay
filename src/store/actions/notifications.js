export const SHOW_ERROR = 'SHOW_ERROR'
export const SHOW_WARNING = 'SHOW_WARNING'

export const showError = (error) => {
    return {
        type: SHOW_ERROR,
        error
    }
}

export const showWarning = (warning) => {
    return {
        type: SHOW_WARNING,
        warning
    }
}
