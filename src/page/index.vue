<template>
	<div>
    <div class="top-logo">
      <a href=""><img src="../images/logo.png" alt=""></a>
    </div>
    <div class="nav">
      <el-row>
      <el-col :span="16">
		    <el-menu class="nav-left" mode="horizontal" router>
  			<el-menu-item index="/user/">Home</el-menu-item>
  			<el-menu-item index="/user/msg">About</el-menu-item>
  			<el-menu-item index="/user/info">Projects</el-menu-item>
        <el-menu-item index="/user/info">Services</el-menu-item>
        <el-menu-item index="/user/info">Blog</el-menu-item>
        <el-menu-item index="/user/info">Contact</el-menu-item>
		    </el-menu> 
      </el-col>
       <el-col :span="8" class="nav-right">
        <el-input class="search" placeholder="请选择日期" icon="search"></el-input>
      </el-col>
      </el-row>
    </div>

    <div class="block">
    <span class="demonstration"></span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in imgs" :key="item.img">
        <img :src="../images/{{item.imgUrl}}" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

	</div>
</template>


<script>
  export default {
    data() {
      return {
          imgs: [{
            img: "1",
            imgUrl: "1.jpg"
          },{
            img: "2",
            imgUrl: "2.jpg"
          },{
            img: "3",
            imgUrl: "3.jpg"
          },{
            img: "4",
            imgUrl: "4.jpg"
          }]
      };
    }
  }
</script>
