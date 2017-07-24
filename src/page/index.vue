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

    <div class="block carousel">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in topImgs" :key="item.img">
        <img class="respond-img" :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>


    <div class="about-wrap">
      <div class="about-us">
        <h2>ABOUT US</h2>
        <p>Phasellus ultrices nulla quis</p>
      </div>
      <div class="about-item">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="item">
              <div class="item-top">
                <h3>Minimal Design</h3>
                <h4>Risus id mediou soim</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.</p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </div>
          </el-col>  
          <el-col :span="8">
            <div class="item">
              <div class="item-top">
                <h3>Minimal Design</h3>
                <h4>Risus id mediou soim</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.</p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <div class="item-top">
                <h3>Minimal Design</h3>
                <h4>Risus id mediou soim</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.</p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </div>
          </el-col>
        </el-row>  
      </div>
    </div>


    <div class="our-wrap">
      <div class="our-top">
        <h2>Our Latest Works</h2>
        <p>Vestibulum auctor dapibus nequ</p>
      </div>
      <div class="mid-carousel">
        <el-carousel :interval="4000" type="card" height="170px">
          <el-carousel-item v-for="item in midImgs" :key="item.img">
            <img class="respond-img" :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    
    <div class="web-wrap">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row class="web-section" :gutter="20">
            <el-col :span="12">
              <h3>Web Design</h3>
              <p class="web-design">Risus id mediou soimto usce pelle nitesqu it nunc sed egesta ante gravids peses </p>
            </el-col>
            <el-col :span="12">
              <p class="web-article">Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. </p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </el-col>
          </el-row>
          <el-row class="web-section clearborder" :gutter="20">
            <el-col :span="12">
              <h3>Web Design</h3>
              <p class="web-design">Risus id mediou soimto usce pelle nitesqu it nunc sed egesta ante gravids peses </p>
            </el-col>
            <el-col :span="12">
              <p class="web-article">Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. </p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
            <span class="inline-block"><img src="../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
            </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
           <span class="inline-block"><img src="../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
            </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
           <span class="inline-block"><img src="../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
          <span class="inline-block"><img src="../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
          </el-collapse-item>
          </el-collapse>
        </el-col> 
      </el-row>
    </div>


  <div class="search-section">
      <el-input class="footer-search" v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="search">搜索</el-button>
      <div>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item label-width="100px">
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
      </div>
  </div>

  
	</div>
</template>


<script>
  export default {
    data() {
      return {
          topImgs: [{
            img: "1",
            imgUrl: "./static/images/1.jpg"
          },{
            img: "2",
            imgUrl: "./static/images/2.jpg"
          },{
            img: "3",
            imgUrl: "./static/images/3.jpg"
          },{
            img: "4",
            imgUrl: "./static/images/4.jpg"
          }],
          midImgs: [{
            img: '1',
            imgUrl: './static/images/5.jpg'
          },{
            img: '2',
            imgUrl: './static/images/6.jpg'
          },{
            img: '3',
            imgUrl: './static/images/7.jpg'
          },{
            img: '4',
            imgUrl: './static/images/8.jpg'
          },{
            img: '5',
            imgUrl: './static/images/9.jpg'
          },{
            img: '6',
            imgUrl: './static/images/10.jpg'
          }]
      };
    }
  }
</script>
