<template>
    <section>
        <a href="javascript:" class="sidebar-toggle" @click="handleClick">
            <el-icon :class="[isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left']"></el-icon>
        </a>
        <div class="user-menu pull-right">
            <el-dropdown trigger="click">
                <section>
                    <img src="@/assets/user.png">
                    <span>下拉菜单</span>
                </section>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>重置密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

    </section>
</template>

<script>
	export default {
		name: "header-aside",
		data(){
			return{
			}
		},
		computed:{
			isCollapse:function () {
				return this.$store.getters['isCollapse']
			}
		},
		methods:{
			handleClick:function () {
				this.$store.commit('changeIsCollapse')
			}
		}
	}
</script>

<style scoped>

</style>