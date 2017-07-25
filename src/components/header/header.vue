<template>
<div>
	<div class="top-logo">
      <a href=""><img src="../../images/logo.png" alt=""></a>
    </div>
    <div class="nav">
      <el-row>
      <el-col :span="16">
		    <el-menu class="nav-left" mode="horizontal" router>
  			<el-menu-item index="/user/">首页</el-menu-item>
  			<el-menu-item index="/user/msg">文章</el-menu-item>
  			<el-menu-item index="/user/info">生活风格</el-menu-item>
        <el-menu-item index="/user/info">关于</el-menu-item>
        <el-menu-item index="/user/info">登录</el-menu-item>
        <el-menu-item index="/user/info">注册</el-menu-item>
		    </el-menu> 
      </el-col>
       <el-col :span="8" class="nav-right">
        <el-input class="search" placeholder="请输入想搜索的内容" icon="search"></el-input>
      </el-col>
      </el-row>
    </div>
    </div>
</template>

<script>
	export default {
		
	}
</script>