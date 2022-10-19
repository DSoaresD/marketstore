import axios from 'axios';
import qs from 'qs';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_BACKEND_URL ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_BACKEND_URL ?? 'dscatalog123';

const basicHeader = () => 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData : LoginData) => {

    const headers = {
        "Content-Type" : 'application/x-www-form-urlencoded',
        Authorization: basicHeader()
    }

    const data = qs.stringify( {
        ...loginData,
        grant_type : 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});

}