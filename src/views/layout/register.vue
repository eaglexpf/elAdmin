<template>
  <div class="login">
    <div class="login-box">
      <div class="login-logo"><b>后台注册</b></div>
      <div class="login-box-body">
        <p class="login-box-msg">注册你的账号</p>
        <el-form :model="form" :rules="rules" ref="loginForm">
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="请输入账号" suffix-icon="el-icon-message"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="form.pwd" autocomplete="off" placeholder="请输入密码" suffix-icon="el-icon-setting" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="form.pwd" autocomplete="off" placeholder="请再次输入密码" suffix-icon="el-icon-setting" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item class="login-btn-item">
            <el-button type="primary" @click="loginSubmit()" native-type="submit">注册</el-button>
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
    }
</script>

<style scoped>

</style>
