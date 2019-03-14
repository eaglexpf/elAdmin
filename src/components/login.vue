<template>
    <div class="login">
        <div class="login-box">
            <div class="login-logo"><b>后台登录</b></div>
            <div class="login-box-body">
                <p class="login-box-msg">登陆你的账号</p>
                <el-form >
                    <el-form-item>
                        <el-input placeholder="请输入账号" suffix-icon="el-icon-message"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="登录密码" suffix-icon="el-icon-setting"></el-input>
                    </el-form-item>
                    <el-form-item class="login-btn-item">
                        <el-button type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script>
	import ElForm from "element-ui/packages/form/src/form";
	import ElFormItem from "element-ui/packages/form/src/form-item";
	import ElInput from "element-ui/packages/input/src/input";
	import ElButton from "element-ui/packages/button/src/button";

	export default {
		components: {
			ElButton,
			ElInput,
			ElFormItem,
			ElForm},
		name: "login",
        data(){
			return {
				labelPosition:"left"
            }
        }
	}
</script>

<style scoped>

</style>