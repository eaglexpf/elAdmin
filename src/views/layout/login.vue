<template>
    <div class="login">
        <div class="login-box">
            <div class="login-logo"><b>后台登录</b></div>
            <div class="login-box-body">
                <p class="login-box-msg">登陆你的账号</p>
                <el-form :model="form" :rules="rules" ref="loginForm">
                    <el-form-item prop="account">
                        <el-input v-model="form.account" placeholder="请输入账号" suffix-icon="el-icon-message"></el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <!--<el-input placeholder="请输入密码" v-model="form.pwd" show-password></el-input>-->
                        <el-input type="password" v-model="form.pwd" autocomplete="off" placeholder="请输入密码" suffix-icon="el-icon-setting" :show-password="true"></el-input>
                        <!--<el-input v-model="form.pwd" placeholder="登录密码" suffix-icon="el-icon-setting" show-password></el-input>-->
                    </el-form-item>
                    <el-form-item class="login-text-item">
                        <el-button class="pull-left" type="text" size="medium">忘记密码</el-button>
                        <el-button class="pull-right" type="text" size="medium" @click="register">注册账号</el-button>
                    </el-form-item>
                    <el-form-item class="login-btn-item">
                        <el-button type="primary" @click="loginSubmit()" native-type="submit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script>
	export default {
		name: "login",
    data(){
			return {
				form: {
					account: '',
					pwd: '',
				},
				rules:{
					account:[
						{required:true,message:"请输入账号",trigger:"blur"}
					],
					pwd:[
						{required:true,message:"请输入密码",trigger:"blur"}
					]
				},
      }
    },
    computed:{
			uuid:function () {
                return this.$store.getters['uuid'];
			},
      isLogin:function () {
        return this.$store.getters['isLogin']
      }
    },
    created(){
		  if (this.isLogin===true){
		    this.$router.push({name:'home'})
      }
    },
    methods:{
		  register:function(){
		    this.$router.push({name:'register'})
      },
			loginSubmit:function () {
                this.$refs['loginForm'].validate((valid)=>{
                	if (valid){
                		var param = new URLSearchParams();
                		param.append("username",this.form.account);
                		param.append('password',this.form.pwd);
                		param.append('uuid',this.uuid);
                        this.$http.post('/login',param).then((response)=>{
							if (response.data.code!==0){
								this.$message({
                                    message:response.data.msg,
                                    type:"warning"
                                });
								return false;
							}
							this.$notify.success({
								title:"登录成功"
							});
							this.$store.commit('setJWTToken',response.data.data.token);
							this.$router.push({name:'home'});
                        }).catch((error)=>{
							this.$notify.error({
								title:"网络请求错误",
								message:error.toString()
							})
                        })
                    }else {
                		return false;
                    }
              })
			}
    }
	}
</script>

<style scoped>

</style>
