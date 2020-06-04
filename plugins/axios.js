import {Message} from 'element-ui'

export default function({$axios}){
    $axios.onError(err=>{
        const {message,statusCode} = err.response.data
        if(statusCode === 400){
            Message.warning(message)
        }
    })
}