<template>
    <section>
        <div class="content-header">
            <h2>权限列表</h2>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="box">
            <div class="box-header">
                <el-button @click="addRoute" type="primary">添加路由</el-button>
            </div>
            <div class="box-body">
                <el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
                    <div class="tree-item" slot-scope="{node,data}">
                        <span>{{data.name}}</span>
                        <span class="tree-btn">
                            <el-button type="warning" size="mini" @click="updateRoute(data)">修改</el-button>
                            <el-button type="danger" size="mini" @click="deleteRoute(data.id)">删除</el-button>
                        </span>
                    </div>
                </el-tree>
            </div>

        </div>

        <el-dialog title="添加路由" :visible.sync="dialogFormVisible" custom-class="dialogForm" :close-on-click-modal="false" :before-close="closeModal">
            <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="路由名称" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="路由描述">
                    <el-input v-model="form.desc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="父级节点">
                    <el-cascader v-model="form.parent_id" :show-all-levels="false" :change-on-select="true" :clearable="true" placeholder="默认为根节点" :options="data" :props="dialogProps"></el-cascader>
                </el-form-item>
                <el-form-item label="路由地址">
                    <el-input v-model="form.route" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="submitAddRoute('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="修改路由" :visible.sync="dialogFormVisible" custom-class="dialogForm" :close-on-click-modal="false" :before-close="closeModal">
            <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="路由名称" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="路由描述">
                    <el-input v-model="form.desc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="父级节点">
                    <el-cascader v-model="form.parent_id" :show-all-levels="false" :change-on-select="true" :clearable="true" placeholder="默认为根节点" :options="data" :props="dialogProps"></el-cascader>
                </el-form-item>
                <el-form-item label="路由地址">
                    <el-input v-model="form.route" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="submitUpdateRoute('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
	export default {
		name: "auth",
		data(){
			return{
				data:[],
				dialogFormVisible:false,
				form: {
					id:0,
					name: '',
					desc: '',
                    parent_id:[],
                    route:''
				},
                rules:{
					name:[
                        {required:true,message:"请输入路由名称",trigger:"blur"}
                    ]
                },
				formLabelWidth: '120px',
				dialogProps:{
					value:'id',
                    label:'name'
                }
			}
		},
        created(){
            this.getAuthList()
        },
        methods:{
			//获取路由列表
			getAuthList:function () {
				let self = this;
                this.$http.get('auth/route').then(function (response) {
                    console.log(response)
                    if (response.data.code!==0){
                    	this.$notify.warning({
                            message:response.data.msg
                        })
                        return
                    }
                    self.data = response.data.data
                    console.log(self.data)
				}).catch(function (error) {
                    console.log(error)
				})
			},
            //重置表单
            resetForm:function (formName) {
				this.form = {
					id:0,
					name: '',
					desc: '',
					parent_id:[],
					route:''
				};
                this.$refs[formName].resetFields();
                this.dialogFormVisible = false;
			},
            //modal对话框关闭前的回调
			closeModal:function (done) {
				this.resetForm('ruleForm');
                done();
			},
            //添加按钮触发事件
            addRoute:function () {
                this.dialogFormVisible = true;
			},
            //确定添加触发事件
			submitAddRoute:function (formName) {
				this.$refs[formName].validate((valid)=>{
					if (valid){
						var param = new URLSearchParams();
                        param.append('name',this.form.name);
                        param.append('desc',this.form.desc);
                        param.append('route',this.form.route);
                        param.append('parent_id',this.form.parent_id[this.form.parent_id.length-1]);
						this.$http.post('/auth/route',param).then((response)=>{
                        	console.log(response.data)
                        	if (response.data.code!==0){
                        		this.$notify.warning({
                                    title:response.data.msg,
                                    message:response.data.data
                                });
                                return false;
                            }
                            this.$notify.success({
                                title:"添加成功"
                            });
                            this.resetForm('ruleForm');
                        	this.getAuthList();
                        }).catch((error)=>{
                            this.$notify.error({
                                title:"网络请求错误",
                                message:error.toString()
                            })
                        })
                    }else {
                        return false
                    }
                })

			},
            //递归查找路由父节点数组集合
            getList(data,id){
				if (!Array.isArray(data)){
					return [];
                }
				for (var i=0,length=data.length;i<length;i++){
					if (data[i].id===id){
						return [id];
                    }
                    var last_ids = this.getList(data[i].children,id);
                    if (last_ids.length>0){
                        last_ids.unshift(data[i].id);
                        return last_ids;
                    }
                }
                return [];
            },
            //修改按钮触发事件
            updateRoute(data){
				var parent_ids = this.getList(this.data,data.id);
				parent_ids.pop();
				this.form.name = data.name;
				this.form.desc = data.desc;
				this.form.route = data.route;
				this.form.parent_id = parent_ids;
				this.form.id = data.id;
				this.dialogFormVisible = true;
            },
            //确定修改触发事件
			submitUpdateRoute:function (formName) {
				this.$refs[formName].validate((valid)=>{
					if (valid){
						var param = new URLSearchParams();
						param.append('name',this.form.name);
						param.append('desc',this.form.desc);
						param.append('route',this.form.route);
						param.append('parent_id',this.form.parent_id[this.form.parent_id.length-1]);
						this.$http.put('/auth/route/'+this.form.id,param).then((response)=>{
							console.log(response.data)
							if (response.data.code!==0){
								this.$notify.warning({
									title:response.data.msg,
									message:response.data.data
								});
								return false;
							}
							this.$notify.success({
								title:"修改成功"
							});
							this.resetForm('ruleForm');
							this.getAuthList();
						}).catch((error)=>{
							this.$notify.error({
								title:"网络请求错误",
								message:error.toString()
							})
						})
					}else {
						return false
					}
				})

			},
            //删除按钮触发事件
            deleteRoute(id){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$http.delete('/auth/route/'+id).then((response)=>{
						if (response.data.code!==0){
							this.$notify.warning({
								title:response.data.msg,
								message:response.data.data
							});
							return false;
						}
						this.$notify.success({
							title:"删除成功"
						});
						this.getAuthList();
					}).catch((error)=>{
						this.$notify.error({
							title:"网络请求错误",
							message:error.toString()
						})
					});
				}).catch(() => {
					this.$notify.info({
                        title:"已取消删除"
                    });
				});
            }
        }
	}
</script>

<style scoped>

</style>