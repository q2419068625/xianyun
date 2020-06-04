<template>
    <el-form 
        :model="form" 
        ref="form"
        :rules="rules" 
        class="form">

        <el-form-item class="form-item" prop="username">
            <el-input 
            placeholder="用户名/手机" v-model="form.username">
            </el-input>
        </el-form-item>

        <el-form-item class="form-item" prop="password">
            <el-input 
            placeholder="密码" 
            type="password" v-model="form.password">
            </el-input>
        </el-form-item>

        <p class="form-text">
            <nuxt-link to="#">忘记密码</nuxt-link>
        </p>

        <el-button 
        class="submit"
        type="primary"
        @click="handleLoginSubmit" @keyup.enter="handleLoginSubmit">
            登录
        </el-button>
    </el-form>

</template>

<script>
export default {
    data(){
        return {
            // 表单数据
            form: {
                username:'',
                password:''
            },
            // 表单规则
            rules: {
                username:[
                    {required:true,message:'请输入用户名',trigger:'blur'},
                     { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        // 提交登录
        handleLoginSubmit(){
        //    console.log(this.form)
        this.$refs.form.validate(valid=>{
            if(valid){
                // this.$axios({
                //     url:'/accounts/login',
                //     method:'Post',
                //     data:this.form
                // }).then(res =>{
                //     // console.log(res.data);
                //     //调用store的方法把用户数据传过去
                //     this.$store.commit('user/setUserInfo',res.data)
                // })

                this.$store.dispatch('user/login',this.form).then(res=>{
                    // 成功提示
                    this.$message({
                        message: "登录成功",
                        type: "success"
                    });
                    this.$router.push("/")
                }).catch(reject=>{
                    // 失败提示
                    this.$message({
                        message: "登录失败",
                        type: "error"
                    });
                })
            }
        })
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>
