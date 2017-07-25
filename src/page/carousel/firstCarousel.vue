<template>
	<div>
		<div class="block carousel">
    <el-carousel height="600px">
      <el-carousel-item v-for="item in topImgs" :key="item.img">
        <img class="respond-img" :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
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
          }]
			}
		}
	}
</script>