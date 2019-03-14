<template>
    <section>
        <strong>Copyright &copy; 2019-{{nowYear}} <a class="footer-href" target="_blank" href="http://blog.xupengfei.net">唯物鹰扬</a> . </strong> All rights reserved.
        <div class="pull-right">
            <b>Version</b> 1.0
        </div>
    </section>
</template>

<script>
	export default {
		name: "footer-aside",
		computed:{
			nowYear:function () {
				return (new Date()).getFullYear();
			}
		},
	}
</script>

<style scoped>

</style>