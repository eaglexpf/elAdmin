<template>
  <div class="login">
    <div class="login-box">
      <div class="login-logo"><b>后台注册</b></div>
      <div class="login-box-body">
        <p class="login-box-msg">注册你的账号</p>
        <el-form :model="form" :rules="rules" ref="registerForm">
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="请输入账号" suffix-icon="el-icon-message"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" suffix-icon="el-icon-message"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="form.pwd" autocomplete="off" placeholder="请输入密码" suffix-icon="el-icon-setting" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item prop="pwd_repeat">
            <el-input type="password" v-model="form.pwd_repeat" autocomplete="off" placeholder="请再次输入密码" suffix-icon="el-icon-setting" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item class="login-btn-item">
            <el-button type="primary" @click="registerSubmit()" native-type="submit">注册</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "register",
      data(){
        var validatePwdRepeat = (rule,value,callback) => {
          if (value===''){
            callback(new Error('请再次输入密码'))
          } else if (value!==this.form.pwd){
            callback(new Error('两次输入密码不一致'))
          } else {
            callback()
          }
        };
        return {
          form: {
            account: '',
            email:'',
            pwd: '',
            pwd_repeat:'',
          },
          rules:{
            account:[
              {required:true,message:"请输入账号",trigger:"blur"}
            ],
            email:[
              {required:true,message:"请输入邮箱",trigger:"blur"},
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            pwd:[
              {required:true,message:"请输入密码",trigger:"blur"}
            ],
            pwd_repeat:[
              {validator:validatePwdRepeat,trigger:"blur"}
            ]
          },
        }
      },
      computed:{
        uuid:function () {
          return this.$store.getters['uuid'];
        },
      },
      methods:{
        registerSubmit:function () {
          this.$refs['registerForm'].validate((valid)=>{
            if (valid){
              var param = new URLSearchParams();
              param.append('username',this.form.account);
              param.append('email',this.form.email);
              param.append('password',this.form.pwd);
              param.append('uuid',this.uuid);
              this.$http.post('/register',param).then((response)=>{
                if (response.data.code!==0){
                  this.$message({
                    message:response.data.msg,
                    type:'warning'
                  })
                  return
                }
                this.$message.success("注册成功")
                this.$router.push({name:'login'})
              }).catch((error)=>{
                this.$notify.error({
                  title:'网络请求错误',
                  message:error.toString()
                })
              })
            } else {
              return false
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
