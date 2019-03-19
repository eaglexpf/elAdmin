<template>
    <section>
        <div class="content-header">
            <h2>角色列表</h2>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="box">
            <div class="box-header">
                <el-button @click="addRole" type="primary">添加</el-button>
            </div>
            <div class="box-body">
                <el-table :data="tableData">
                    <el-table-column prop="name" label="名称">
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
    </section>
</template>

<script>
	export default {
		name: "role",
        data(){
			return {
				tableData:[
                    {id:1,name:'管理员'},
                    {id:2,name:'编辑'}
                ]
            }
        },
        methods:{
			addRole:function () {

			}
        }
	}
</script>

<style scoped>

</style>