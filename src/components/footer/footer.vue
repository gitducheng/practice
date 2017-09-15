<template>
  <div>
    <div class="footer">
    <el-row class="footer-msg">
        <el-col :span="8" class="footer-item" v-for="item in lists" key="">
          <i class="el-icon-share"></i>
          <p>{{item.msg}}</p>
        </el-col>
        <!--  <el-col :span="8" class="footer-item">
          <i class="el-icon-share"></i>
          <p>John DoeSed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eupulvinar nuncint </p>
        </el-col>
         <el-col :span="8" class="footer-item">
          <i class="el-icon-share"></i>
          <p>John DoeSed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eupulvinar nuncint </p>
        </el-col> -->
    </el-row>
    <p class="last-msg">京 ICP 证 09002463 号|Copyright © 1999-2017, CSDN.NET, All Rights Reserved</p>
  </div>
  </div>
</template>

<script>
  var lists = [{
    msg: 'John1 DoeSed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eupulvinar nuncint'
  },{
    msg: 'John2 DoeSed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eupulvinar nuncint'
  },{
    msg: 'John3 DoeSed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eupulvinar nuncint'
  }]
  export default {
    data(){
      return {
        lists: lists
      }
    }
  }
</script>