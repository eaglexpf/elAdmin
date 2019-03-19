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
            next();
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
			},
      isLogin:function () {
        return this.$store.getters['isLogin']
      }
		},
    created(){
			if (this.isLogin===false){
			  this.$router.push({name:'login'})
      }
    },
		methods:{
		}
	}
</script>
