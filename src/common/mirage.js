import { Server } from 'miragejs'

import constants from 'common/constants'

new Server({
    routes() {
        this.namespace = '/'
        this.passthrough('/locales/*')

        this.get(constants.API_URL + '/payments/:paymentId', (schema, request) => {
            const paymentId = request.params.paymentId
            let theme = 'default'
            let language = 'en'

            if (paymentId === '1') {
                theme = 'custom'
                language = 'ru'
            }

            return {
                'interface': {
                    'language': language,
                    'theme': theme,
                    'url_success': '',
                    'url_error': 'http://tests.com'
                },
                'request': {
                    'Amount': '5.50',
                    'OrderId': '${ORDER}',
                    'Currency': 'RUB',
                    'ExtraData': {
                        'Key': '123',
                        'Custom': 'test'
                    },
                    'Description': 'test 3d web pay'
                },
                'customer_info': {
                    'ZIP': '222410',
                    'Town': '',
                    'Email': '1@1.ru',
                    'Phone': '+333227778899',
                    'Address': 'test, 1-2',
                    'Country': 'BEL',
                    'Language': 'BY'
                },
                'state': {
                    'name': 'new',
                    'details': null
                },
                'style': {}
            }
        })

        this.post(constants.API_URL + '/payments/:paymentId', (schema, request) => {
            const paymentId = request.params.paymentId
            const response = {}

            if (paymentId === '1') {
                response.error = 'test'
            }
        })
    }
})
