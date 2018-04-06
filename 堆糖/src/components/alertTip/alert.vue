<template>
	<div class="alert" v-if="alertTip">
		<div class="content">
			<header>
				<span>登录</span>
				<div class="close">
					<img src="static/image/关闭.png" @click="close" />
				</div>
			</header>
			<loginInput login="true"></loginInput>
			<footer>
				<span>还没有账号?立即注册</span>
			</footer>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from "vuex"
	import loginInput from "@/components/loginInput/loginInput"
	export default {
		data() {
			return {}
		},
		computed: mapState(["alertTip"]),
		methods: {
			...mapMutations(["increment"]),
			close() {
				this.increment();
			}
		},
		components: {
			loginInput
		}
	}
</script>

<style lang="scss" scoped>
	.alert {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 10;
		.content {
			width: 50%;
			height: 506px;
			background: white;
			margin: 100px auto;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 0 5px rgba(0, 0, 0, 0.2);
			border-radius: 4px;
			header {
				color: #606060;
				text-align: center;
				height: 46px;
				font-size: 16px;
				font-weight: 700;
				line-height: 46px;
				position: relative;
				border-bottom: 1px solid #666;
			}
		}
	}
	
	.close {
		position: absolute;
		top: 0;
		right: 0;
		width: 46px;
		height: 46px;
		text-align: center;
		line-height: 42px;
		img {
			width: 16px;
			height: 16px;
		}
	}
	
	footer {
		height: 50px;
		font-size: 12px;
		line-height: 50px;
		text-align: center;
		color: #5678a0;
		background: #f9f9f9;
		border-top: 1px solid #666;
		span {
			&:hover {
				color: #a71d5d;
				text-decoration: underline;
			}
		}
	}
</style>