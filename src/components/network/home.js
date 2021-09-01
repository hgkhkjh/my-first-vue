import{request} from "../network/request.js"
export function gethome(){
    return request({
        url:"/home/multidata"
    })
}
//发送商品请求
export function gethomegoods(type,page){
    return request({
        url:'/home/data',
        //params属性传递参数
        params:{
            type,
            page
        }
    })
}