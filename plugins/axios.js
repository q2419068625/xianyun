import {Message} from 'element-ui'

export default function({$axios,redirect}){
    $axios.onError(err=>{
        const {message,statusCode} = err.response.data
        if(statusCode === 400){
            Message.warning(message)
        }
        //未登录跳转到登录页面
        if(statusCode === 401 || statusCode===403){
            redirect('/user/login')
        }
    })
}