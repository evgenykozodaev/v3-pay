import get from 'lodash/get'

export default (data) => {
    const interfaceInfo = {
        language: get(data, 'interface.language') || '',
        theme: get(data, 'interface.theme') || '',
        successUrl: get(data, 'interface.url_success') || '',
        errorUrl: get(data, 'interface.url_error') || ''
    }

    const paymentInfo = {
        amount: get(data, 'request.Amount') || '',
        orderId: get(data, 'request.OrderId') || '',
        currency: get(data, 'request.Currency') || '',
        description: get(data, 'request.Description') || ''
    }

    const customerInfo = {
        country: get(data, 'customer_info.Country') || '',
        language: get(data, 'customer_info.Language') || '',
        town: get(data, 'customer_info.Town') || '',
        address: get(data, 'customer_info.Address') || '',
        zipCode: get(data, 'customer_info.ZIP') || '',
        email: get(data, 'customer_info.Email') || '',
        phone: get(data, 'customer_info.Phone') || ''
    }

    const stateInfo = {
        name: get(data, 'state.name') || '',
        details: get(data, 'state.details') || ''
    }

    return {
        interfaceInfo,
        paymentInfo,
        customerInfo,
        stateInfo
    }
}
