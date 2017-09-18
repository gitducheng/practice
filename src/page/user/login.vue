<template>
  <div>
  	<div class="login">
  		<el-tabs class="login-wrap" v-model="activeName">
    		<el-tab-pane class="login-content" label="登录" name="first">
    			<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
					<el-form-item label="密码" prop="pass" :rules="[
            { validator: 'validatePass', trigger: 'blur' },
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]">
    	<el-input type="password" v-model="dynamicValidateForm.pass" auto-complete="off"></el-input>
  			</el-form-item>
   			<el-form-item label="活动名称" prop="name" :rules="[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]">
    	<el-input v-model="dynamicValidateForm.name"></el-input>
 		</el-form-item>
  		<el-form-item label-width="100px">
    		<el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
    		<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
  			</el-form-item>
		</el-form>
    		</el-tab-pane>


    		<el-tab-pane class="login-content" label="注册" name="second">
    			<el-form :model="dynamicValidateForm2" ref="dynamicValidateForm2" label-width="100px" class="demo-dynamic">
					<el-form-item label="密码" prop="pass" :rules="[
            { validator: 'validatePass2', trigger: 'blur' },
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]">
    	<el-input type="password" v-model="dynamicValidateForm2.pass" auto-complete="off"></el-input>
  			</el-form-item>
   			<el-form-item label="活动名称" prop="name" :rules="[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]">
    	<el-input v-model="dynamicValidateForm2.name"></el-input>
 		</el-form-item>
  		<el-form-item prop="email" label="邮箱" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
   			 <el-input v-model="dynamicValidateForm2.email"></el-input>
  		</el-form-item>
  		<el-form-item label-width="100px">
    		<el-button type="primary" @click="submitForm2('dynamicValidateForm2')">注册</el-button>
    		<el-button @click="resetForm2('dynamicValidateForm2')">重置</el-button>
  			</el-form-item>
		</el-form>
    		</el-tab-pane>
  		</el-tabs>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
//import {mapGetters,mapActions} from 'vuex'
	export default {
    data() {
      return {
        activeName: 'second',
        //注册
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          name:'Wilson',
          pass:''
        },
        dynamicValidateForm2: {
          domains: [{
            value: ''
          }],
          email: '',
          name:'',
          pass:''
        }
      };
    },
   methods: {
      submitForm(formName) { 
        var _this = this;
        axios.post('/api/login',{
          name:this.dynamicValidateForm.name,
          pass:this.dynamicValidateForm.pass
          })
          .then(function(response){
            _this.$store.dispatch('increment');
            _this.$router.push('/');
          })
          .catch(function(err){
            console.log(err);
          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm2(formName) {
        axios.post('/api/resgiter',{
          name: this.dynamicValidateForm2.name,
          pass: this.dynamicValidateForm2.pass,
          email: this.dynamicValidateForm2.email
        })
        .then(function(result){
          alert("注册成功！");
        })
        .catch(function(err){
          console.log(err);
        })
      },
      resetForm2(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>