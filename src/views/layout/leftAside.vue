<template>
    <el-aside :style="{width:[isCollapse?64:230]+'px'}">
        <el-header height="50px">aaa</el-header>
        <el-menu :collapse="isCollapse" :router="true" :collapse-transition="false">
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">导航一{{isCollapse}}</span>
            </el-menu-item>
          <el-menu-item index="25">
            <i class="el-icon-menu"></i>
            <span slot="title">模块管理1</span>
          </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span slot="title">权限管理</span>
                </template>
                <el-menu-item index="auth">
                    <i class="el-icon-menu"></i>
                    <span slot="title">模块管理1</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
	export default {
		name: "left-aside",
		data(){
			return{
			}
		},
		computed:{
			isCollapse:function () {
				return this.$store.getters['isCollapse']
			},
		},
		methods:{
		}
	}
</script>

<style scoped>

</style>
