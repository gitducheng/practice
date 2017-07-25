<template>
	<div>
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
	</div>
</template>

<script>
	export default {
		data() {
      return {
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
          }],
      }
    }
	}
</script>