<template>
<div>
	<el-table
      :data="tableData"
      class="write">
      <el-table-column
        prop="time"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="文章名称">
      </el-table-column>
      <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.row.id)">查看</el-button> 
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <router-link class="writeBtn" to="/user/write">写作</router-link> 
</div>
</template>

<script>
// var listp = [{
//             id: '1',
//             time: '2016-05-02',
//             name: '王小虎',
//             title: '上海市普陀区金沙江路 1518 弄'
//           }, {
//             id: '2',
//             time: '2016-05-04',
//             name: '王小虎',
//             title: '上海市普陀区金沙江路 1517 弄'
//           }, {
//             id: '3',
//             time: '2016-05-01',
//             name: '王小虎',
//             title: '上海市普陀区金沙江路 1519 弄'
//           }, {
//             id: '4',
//             time: '2016-05-03',
//             name: '王小虎',
//             title: '上海市普陀区金沙江路 1516 弄'
//           }];
import axios from 'axios'        
	export default{
		data() {
        return {
         tableData: ''
         
        }
      },
      mounted(){
        this.getArticle()
      },
      methods: {
        handleEdit: function(id){
          this.$router.push('/lists/'+id);
        },
        handleDelete: function(id){
          var _this = this;
          axios.post('/api/delete',{
            id: id
          })
          .then(function(result){
              alert("删除成功！");
              _this.$router.push('/');
          })
          .catch(function(err){
            console.log(err);
          })
        },
        getArticle: function(){
          var _this = this;
          axios.get('/api/lists')
            .then(function(result){
              _this.tableData = result.data;
            })
            .catch(function(err){

            })
        }
      }
	}
</script>