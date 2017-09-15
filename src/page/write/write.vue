<template>
  <div class="editor">
  	<p class="rizhi">日志文章标题：</p>
  	<el-input v-model="input" placeholder="请输入内容"></el-input>
	<p class="rizhi">日志文章内容：</p>
    <quill-editor v-model="content" ref="myQuillEditor">
    </quill-editor>
	<el-button id="submit" type="primary" @click="subWrite()">提交</el-button>
  </div>
</template>

<script>
import axios from 'axios'
	export default {
  		data () {
    		return {
      			content: '',
      			input:''
    		}
  		},
      methods: {
        subWrite: function(){
          var _this = this;
          var now = this.getNowFormatDate();
          axios.post('/api/write',{
            content: this.content,
            input: this.input,
            time: now
          })
          .then(function(result){
            alert("发布成功！");
            _this.$router.push('/user/life');
          })
          .catch(function(err){
            console.log(err);
          })
        },
        getNowFormatDate: function() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
        } 
      }
}
</script>

<style>
	.quill-editor {
  height: 100%;
}

  .ql-container {
    height: 480px;
  }


.limit {
  height: 30px;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: right;

  span {
    color: #ee2a7b;
  }
}

.ql-snow .ql-editor img {
  max-width: 480px;
}

.ql-editor .ql-video {
  max-width: 480px;
}
</style>