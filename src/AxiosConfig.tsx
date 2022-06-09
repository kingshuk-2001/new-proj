import axios from 'axios';
import store from 'axios';
import { useNavigate } from 'react-router';
// import { router } from 'react-router-dom'
// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate = useNavigate();
const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === "production" ?
        "" :
        ""
});

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    console.log('error', error);

    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    // if (response) {
    //     return response
    // }
    return response;
}, function (error) {
    if (error.response.status === 200) {
        // store.dispatch('logout')
        console.log('error', error.response.status);
        // router.push('/login')
        navigate('/login')
    }
    return Promise.reject(error);
});

export default axiosInstance;

