//store下的每个文件都是一个store的实例，不需要手动创建
//只需要暴漏store的属性 （固定写法）

export const state =()=> ({
    userInfo:{
        token:'',
        user:{}
    }
})
export const mutations = {
    //设置用户数据
    setUserInfo(state,data){
        state.userInfo = data
    },
    //清空用户数据
    clearUserInfo(state){
        state.userInfo = {
            token:'',
            user:{}
        }
    }
}

export const actions = {
    //登录
    login({commit},data){
        return this.$axios({
            url:'/accounts/login',
            method:'Post',
            data
        }).then(res =>{
            // // console.log(res.data);
            // //调用store的方法把用户数据传过去
            // this.$store.commit('user/setUserInfo',res.data)
            commit('setUserInfo',res.data)
            Promise.resolve()
        })
    },
    //注册
    register({commit},props){
        return this.$axios({
                url:'/accounts/register',
                method:'POST',
                data:props
                }).then(res=>{
                //注册成功后跳转登录
                commit('setUserInfo',res.data)
            })
    }
}