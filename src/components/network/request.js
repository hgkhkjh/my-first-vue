import axios from "axios"
export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        //https://api.apiopen.top/getJoke?page=1&count=2&type=video
        timeout: "2000"
    })
    //设置拦截器
    //请求拦截
    instance.interceptors.request.use(aaa => {
        // console.log("yes request");
        // console.log(aaa);
        return aaa
    }), err => {
        // console.log("no repuest");
        // console.log(err);
        return err;
    }
    //响应拦截
    instance.interceptors.response.use(aaa => {
        // console.log(' yes response 2');
        // console.log(aaa);
        return aaa;
    }), err => {
        // console.log(' no esponse 2');
        // console.log(err);
        return Promise.reject(err);
    };
    return instance(config)
}





