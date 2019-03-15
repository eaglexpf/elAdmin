<template>
    <el-container class="main-box">
        <!--左侧侧边栏-->
        <left-aside></left-aside>
        <!--右侧主体内容-->
        <el-container>
            <!--右侧头部-->
            <el-header height="50px">
                <header-aside></header-aside>
            </el-header>
            <!--右侧内容-->
            <el-main>
                <router-view></router-view>
            </el-main>
            <!--尾部-->
            <el-footer height="50px">
                <footer-aside></footer-aside>
            </el-footer>

        </el-container>
    </el-container>
</template>

<script>
	import LeftAside from "./leftAside";
	import HeaderAside from "./headerAside";
	import FooterAside from "./footerAside";
	import ElFooter from "element-ui/packages/footer/src/main";

	export default {
		components: {
			ElFooter,
			FooterAside,
			HeaderAside,
			LeftAside},
		name: "layout",
		data(){
			return{
                height:50
			}
		},
		beforeRouteUpdate(to,from,next){
			var param = new URLSearchParams();
			param.append('token',this.token);
			this.$http.post('/login.check',param).then((response)=>{
				if (response.data.code!==0){
					this.$router.push({name:'login'});
					return
				}
				next()
			}).catch((error)=>{
				this.$notify.error({
					title:"网络请求错误",
					message:error.toString()
				})
				this.$router.push({name:'login'});
			})
		},
		computed:{
			isCollapse:function () {
                return this.$store.getters['isCollapse']
			},
			uuid:function () {
				return this.$store.getters['uuid'];
			},
            token:function () {
                return this.$store.getters['jwtToken'];
			}
		},
        created(){
			this.loginUUID();
        },
		methods:{
			loginUUID:function () {
				var param = new URLSearchParams();
				param.append('uuid',this.uuid);
				this.$http.post('/login.uuid',param).then((response)=>{
					if (response.data.code!==0){
						this.$router.push({name:'login'});
						return
					}
					this.$store.commit('setJWTToken',response.data.data.token);
				}).catch((error)=>{
					this.$notify.error({
						title:"网络请求错误",
						message:error.toString()
					})
					this.$router.push({name:'login'});
				})
			},
		}
	}
</script>
