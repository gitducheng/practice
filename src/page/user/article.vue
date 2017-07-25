<template>
	<div>
		<div class="article">
			<h1>读书无用论都是骗人的</h1>
			<div class="comment-msg">
					<img class="tx" src="../../images/tx.jpg" alt="">
					<div class="people">
					<p class="name">作者:名字哈哈</p>
					<p class="time">30楼 · 2017.07.25 15:05</p>
					</div>
			</div>
			<p class="people-comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet similique harum facilis dolores adipisci soluta mollitia suscipit possimus tenetur nisi temporibus quis, sequi consectetur dolore, quia fugit pariatur aperiam!</p>
		</div>
		<comment></comment>
	</div>
</template>

<script>
import comment from "../comment/comment"
	
	export default {
		components: {
			comment
		}
	}
</script>