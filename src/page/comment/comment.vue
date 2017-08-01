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
			<el-button class="send" type="success">发送</el-button>
			<!-- </span> -->
		</div>
		<div class="comment-content">
			<p><span class="comment-number">99条评论:</span></p>
			<ul>
				<li v-for="item in lists">
					<div class="comment-msg">
						<img class="tx" src="../../../static/images/11.jpg" alt="">
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
	var lists = [{
		name: '名字哈哈',
		time: ' · 2017.07.25 15:05',
		msg: '文章提出的问题挺好，读书有用。有了大量例证，分析也很详实。问题是，这里只提出一个问题，并没找到解决方法，甚至连点有用建议都没有。通篇似乎在说：读985 211 至少能缩小差距，不至于太落后。这是大家都知道的道理，正确，却没用。'
	}]
	export default {
		data() {
			return{
				lists: lists,
				textarea2: ''
			}
		}
	}
</script>