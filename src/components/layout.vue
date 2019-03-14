<template>
    <el-container class="main-box">
        <el-aside :style="{width:[isCollapse?64:230]+'px'}">
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
                    <b>Version</b> 1.0
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
			LayMenu},
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
