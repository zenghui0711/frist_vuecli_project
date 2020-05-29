import Cookies from 'js-cookie';

const token_name = "sh3h_token2";

export function getToken() {
    return Cookies.get(token_name)
}

export function setToken(token) {
    return Cookies.set(token_name, token)
}

export function removeToken() {
    return Cookies.remove(token_name)
}