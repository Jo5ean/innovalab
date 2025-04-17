const IGNORE_IN_URL = ['validation'];

const MESSAGE_ERROR = {
    success: false,
    message: 'No se pudo realizar la peticion'
}

/**
 * Enviar peticion al servidor por fecth
 */

function armarBody(params) {
    let urlencoded = new URLSearchParams();
    if (Object.keys(params).length !== 0) {
        for (var key in params) {
            urlencoded.append(key, params[key]);
        }
    }
    return urlencoded
}

const connection = async ({ method = 'POST', url = '', params = {} }) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    const comparation_method = method === 'GET' || method === 'DELETE';

    let options = {
        method: method,
        headers: headers,
        redirect: 'follow',
        body: !comparation_method ? armarBody(params) : null,
    };

    let init = 0;
    /*AGREGRO A LA URL LOS PARAMETROS ENVIADOS*/
    if (comparation_method) {
        if (Object.keys(params).length !== 0) {
            for (var key in params) {
                if (!IGNORE_IN_URL.includes(key)) {
                    url = init === 0 ? `${url}?${key}=${params[key]}` : `${url}&${key}=${params[key]}`;
                    init++;
                }
            }
        }
    }
    let response;
    try {
        response = await fetch(url, options);
        if (!response.ok) {
            console.log('Request failed I', response);
            let message = response.description.toString() ?? response.statusText;
            response = MESSAGE_ERROR;
            response.message = message;
        } else {
            response = await response.json();
        }

    } catch (error) {
        console.error('Request failed II', error);
        response = MESSAGE_ERROR;
        response.message = error;
    } finally {
        return response;
    }
}

export default connection;