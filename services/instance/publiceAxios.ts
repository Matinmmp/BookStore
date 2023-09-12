import { BASE_URL } from "../../configs/constans";
import { toast } from "react-toastify";
import axios from "axios";


const publicAxios = axios.create({
    baseURL: BASE_URL
});


publicAxios.interceptors.request.use(config => config, error => Promise.reject(error));

publicAxios.interceptors.response.use(res => res,
    error => {
        if (error.response.status === 401) 
        console.log("Error");  
         toast.error('نام کاربری را اشتباه وارد کردید .', {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
            });
        return Promise.reject(error);
    });

export default publicAxios;