<template>
	<div class="comment-wrap">
		<el-input
  			type="textarea"
  			:autosize="{ minRows: 2, maxRows: 4}"
  			placeholder="请输入内容"
  			v-model="textarea2">
		</el-input>
		<div class="btn-wrap">
			<!-- <span class="wrapper"> -->
			<el-button class="cancel">取消</el-button>
			<el-button class="send" type="success" @click="sendComment()">发送</el-button>
			<!-- </span> -->
		</div>
		<div class="comment-content">
			<p><span class="comment-number">99条评论:</span></p>
			<ul>
				<li v-for="item in lists">
					<div class="comment-msg">
						<img class="tx" src="../../images/11.jpg" alt="">
						<div class="people">
							<p class="name">{{item.name}}</p>
							<p class="time">30楼{{item.time}}</p>
						</div>
						<p class="people-comment">{{item.msg}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
var lists = [];
function getComment() {
	axios.get('/api/comment')
		.then(function(response){
			lists = response.data;
		})
		.catch(function(err){
			console.log(err);
		})
};
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
} 
//getComment();

	// var lists = [{
	// 	name: '名字哈哈',
	// 	time: ' · 2017.07.25 15:05',
	// 	msg: '文章提出的问题挺好，读书有用。有了大量例证，分析也很详实。问题是，这里只提出一个问题，并没找到解决方法，甚至连点有用建议都没有。通篇似乎在说：读985 211 至少能缩小差距，不至于太落后。这是大家都知道的道理，正确，却没用。'
	// }]
	export default {
		data() {
			return{
				lists: lists,
				textarea2: ''
			}
		},
		methods: {
			sendComment: function(){
				var now = getNowFormatDate();
				axios.post('/api/sendComment',{
					name: "小明同学",
					time: " · " + now,
					msg: this.textarea2
				})
				.then(function(response){
					alert(response);
					getComment();
				})
				.catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>