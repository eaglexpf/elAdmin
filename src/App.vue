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
        },
        methods:{
        }
	}
</script>

<style>

</style>