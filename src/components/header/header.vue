<template>
<div>
	<div class="top-logo">
      <a href=""><img src="../../images/logo.png" alt=""></a>
    </div>
    <div class="nav">
      <el-row>
      <el-col :span="16">
		    <el-menu class="nav-left" mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/user/article">评论区</el-menu-item>
        <el-menu-item index="/user/life">文章目录</el-menu-item>
        <el-menu-item index="/user/write">写作</el-menu-item>
        <el-menu-item index="/user/login" :class="{logDisplay:!count}">登录/注册</el-menu-item>
        <el-menu-item index="" :class="{logDisplay:count}" @click="exitLogin()">退出登录</el-menu-item>
        </el-menu>
      </el-col>
       <el-col :span="8" class="nav-right">
        <el-input class="search" placeholder="请输入想搜索的内容" icon="search"></el-input>
      </el-col>
      </el-row>
    </div>
     <router-view></router-view>
  
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
	export default {
		  data(){
        return {
          
        }
      },
     computed: mapGetters([
        'count'
      ]),
     methods: {
      exitLogin: function(){
        this.$store.dispatch('increment');  //触发函数
        this.$router.push('/');
      }
     }
	}
</script>

<style>
  .logDisplay{
    display: none;
  }
</style>