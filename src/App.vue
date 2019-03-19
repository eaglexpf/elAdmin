<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		name: "app",
      computed:{
			uuid:function () {
        var uuid = this.$common.getItem('uuid');
        if (!uuid){
          uuid = this.$common.createNewUUID();
          this.$common.setItem('uuid',uuid,3600*24*30)
        }
        return uuid;
			}
      },
      created(){
        this.$store.commit('setUUID',this.uuid);
        this.loginUUID();
      },
      methods:{
        loginUUID:function () {
          var param = new URLSearchParams();
          param.append('uuid',this.uuid);
          this.$http.post('/login.uuid',param).then((response)=>{
            if (response.data.code!==0){
              this.$store.commit('setIsLogin',false);
              this.$router.push({name:"login"});
              return
            }
            this.$store.commit('setJWTToken',response.data.data.token);
            this.$store.commit('setIsLogin',true);
            // this.$router.push({name:"home"});
          }).catch((error)=>{
            this.$notify.error({
              title:"网络请求错误",
              message:error.toString()
            });
            this.$store.commit('setIsLogin',false);
            this.$router.push({name:"login"});
          })
        },
      }
	}
</script>

<style>

</style>
