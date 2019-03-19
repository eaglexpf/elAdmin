<template>
    <section>
        <div class="content-header">
            <h2>基础表格</h2>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box">
            <div class="box-header">
                <el-button @click="addTable" type="primary">添加</el-button>
            </div>
            <div class="box-body">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                    <el-table-column label="操作" width="180" align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                            <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
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
                <el-form-item label="路由地址">
                    <el-input v-model="form.route" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('ruleForm')">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
	export default {
		name: "basTable",
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
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
			}
		},
        methods:{
			//添加按钮触发事件
			addTable:function () {
				this.dialogFormVisible = true;
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
            submitForm:function (formName) {

			}
        }
	}
</script>

<style scoped>

</style>