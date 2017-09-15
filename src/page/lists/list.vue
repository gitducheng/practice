<template>
	<div id="articleWrap">
		<h1 id="title">{{list[0].title}}</h1>
		<p>{{list[0].content}}</p>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		data() {
			return {
				id: this.$route.params.id,
				list:''
			}
		},
		mounted(){
			this.getArticle();
		},
		methods:{
		getArticle: function(){
			var _this = this;
			//var num = this.id;
			axios.post('/api/list',{
				id:this.id
			})
			.then(function(result){
				_this.list = result.data;
			})
			.catch(function(err){
				console.log(err);
			})
		},
		
		}
	}

	
</script>