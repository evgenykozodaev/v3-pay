import get from 'lodash/get'

import constants from 'common/constants'

const utils = {}

utils.localize = (localeData, localeKey) => {
    return get(localeData, localeKey) || localeKey
}

utils.fetch = (url, args) => {
    const requestData = {
        method: args.method,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...args.headers
        }
    }

    let requestUrl = constants.API_URL + url;

    if (args.params) {
        const params = new URLSearchParams();

        Object.keys(args.params).forEach((key) => {
            const value = args.params[key];

            params.set(key, value);
        });

        let requestParams = params.toString();

        if (requestParams.length) {
            requestUrl = `${url}?${requestParams}`;
        }
    }

    if (args.body) {
        if (typeof args.body === 'string') {
            requestData.body = args.body;
        } else {
            requestData.body = JSON.stringify(args.body);
        }
    }

    return fetch(requestUrl, requestData)
        .then((response) => {
            return response.json()
        })
}

export default utils
