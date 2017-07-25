<template>
  <div id="app">
  	<!-- <web-header></web-header> -->
    <router-view></router-view>
   <!--  <web-footer></web-footer>	 -->
  </div>
</template> 

<script>
import webHeader from "./components/header/header"
import webFooter from "./components/footer/footer"


	export default {
  		components: {
  			webHeader,
  			webFooter
  		}
	}
</script>

<style>
  @import "./style/style.css";
  @import "./style/reset.css";
</style>
