<template>
    <el-menu :collapse="isCollapse" router :collapse-transition="false">
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一{{isCollapse}}</span>
        </el-menu-item>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">权限管理</span>
            </template>
            <el-menu-item index="/model">
                <i class="el-icon-menu"></i>
                <span slot="title">模块管理</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
	export default {
		name: "lay-menu",
        props:["isCollapse"],
        watch:{
			isCollapse:function(val) {
                console.log(val,'aaa')
			}
        }

	}
</script>

