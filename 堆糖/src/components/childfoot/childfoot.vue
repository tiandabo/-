<template>
	<div class="foot">
		<div class="footer">
			<p>&copy;2017 duitang.com 版权所有。沪ICP备10038086号-3</p>
			<p>
				<a href="#">堆糖收集工具</a>
				<a href="#">免责声明</a>
				<a href="#">加入我们</a>
				<a href="#">关于我们</a>
				<a href="#">帮助中心</a>
				<a href="#">标签集</a>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.foot {
		width: 100%;
		height: 68px;
		background: #999;
	}
	.footer {
		width: 60%;
		margin: 0 auto;
		padding: 0;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		a {
			color: #444;
			text-decoration: none;
		}
		p {
			padding-top: 20px;
			margin: 0;
			&:first-child {
				color: #666;
			}
			
		}
	}
</style>