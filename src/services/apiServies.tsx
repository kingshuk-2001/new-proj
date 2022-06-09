import axiosInstance from "../AxiosConfig";

export const getCall = async (methods: any = '', params: any = '') => {
    return await axiosInstance.get(methods + params);
}

export const postCall = async (methods: any = '', params: any = '') => {
    return await axiosInstance.post(methods, params);
}

export const putCall = async (methods: any = '', params: any = '') => {
    return await axiosInstance.post(methods, params);
}

export const deleteCall = async (methods: any = '', params: any = '') => {
    return await axiosInstance.delete(methods + params);
}
