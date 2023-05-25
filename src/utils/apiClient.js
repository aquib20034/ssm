import axios from 'axios';
import { parseJwt } from './utilityFunctions'

// Custom Axios Instance Creation
const Axios = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    const idToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

    if (parseJwt(idToken)?.exp * 1000 < (new Date().getTime() - 60000)) {
        // Refresh the token
        // then
        // idToken = 'Updated Token'
    }


    if (idToken) {
        config.headers.Authorization = `Bearer ${idToken}`
    } else {
        config.headers.Authorization = ''
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default Axios;