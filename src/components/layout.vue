<template>
    <el-container class="main-box">
        <el-aside :class="[isCollapse?'left-aside-collapse':'left-aside']" :style="{width:[isCollapse?64:230]+'px'}">
            <el-header style="height: 50px;">aaa</el-header>
            <lay-menu :isCollapse="isCollapse"></lay-menu>
        </el-aside>
        <el-container>
            <el-header style="height: 50px;">
                <a href="javascript:" class="sidebar-toggle" @click="handleClick">
                    <el-icon :class="[isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left']"></el-icon>
                </a>
                <div class="user-menu pull-right">
                    <el-dropdown trigger="click">
                        <div class="el-dropdown-link">
                            <img src="../assets/user.png">
                            <span>
                                下拉菜单
                            </span>
                        </div>

                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>重置密码</el-dropdown-item>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer style="height: 50px;">
                <strong>Copyright &copy; 2019-{{nowYear}} <a class="footer-href" target="_blank" href="http://blog.xupengfei.net">唯物鹰扬</a> . </strong> All rights reserved.
                <div class="pull-right">
                    <b>Version</b> 2.0
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
	import ElContainer from "element-ui/packages/container/src/main";
	import ElAside from "element-ui/packages/aside/src/main";
	import ElHeader from "element-ui/packages/header/src/main";
	import ElMain from "element-ui/packages/main/src/main";
	import ElFooter from "element-ui/packages/footer/src/main";
	import LayMenu from "./layout/layMenu";
	import ElIcon from "element-ui/packages/icon/src/icon";

	export default {
		components: {
			ElIcon,
			LayMenu,
			ElFooter,
			ElMain,
			ElHeader,
			ElAside,
			ElContainer},
		name: "layout",
        data(){
			return{
				isCollapse:false,
            }
        },
        computed:{
			nowYear:function () {
                return (new Date()).getFullYear();
			}
        },
        methods:{
			handleClick:function () {
                this.isCollapse = !this.isCollapse;
			}
        }
	}
</script>

<style scoped>
    .main-box{
        width: 100%;
        height: 100%;
    }
    .el-header{
        background-color: #3c8dbc;
        color: #ffffff;
        line-height: 50px;
        padding: 0;
    }
    .el-footer{
        line-height: 50px;
        background-color: #ffffff;
        color: #333333;
        font-size: 12px;
        border-top: 1px solid #d2d6de;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        overflow: hidden;
    }
    .el-aside .el-header{
        background-color: #367fa9;
        text-align: center;
        padding: 0;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        /*line-height: 160px;*/
    }

    .sidebar-toggle{
        padding: 13px;
        font-size: 18px;
    }
    .sidebar-toggle:hover{
        background-color: #367fa9;
    }
    .left-aside,.left-aside-collapse{
        cursor: pointer;
        -webkit-transition: border-color .3s,background-color .3s,color .3s;
        transition: border-color .3s,background-color .3s,color .3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    .footer-href{
        color: #367fa9;
    }
    .pull-right{
        float: right;
    }
    
    .user-menu .el-dropdown{
        padding: 0 15px;
        color: #fff;
    }
    .user-menu:hover{
        cursor: pointer;
        background-color: #367fa9;
    }
    .user-menu img{
        width: 25px;
        border-radius: 50%;
        margin-right: 8px;
        margin-top: 12px;
        float: left;
    }

</style>