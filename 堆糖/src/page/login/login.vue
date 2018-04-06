<template>
	<div class="login">
		<header>
			<div>
				<router-link to="/home" tag="div">
					<img src="https://b-ssl.duitang.com/uploads/files/201312/24/20131224171644_TXGCC.png" />
				</router-link>
				
				<p class="p">
					<span><router-link to="/login/register" tag="span" class="login-router" >注册</router-link></span>
					<span><router-link to="/login/input" tag="span" class="login-router" >登录</router-link></span>
				</p>
			</div>
		</header>
		<router-view class="content"></router-view>

	</div>
</template>

<script>
	import loginInput from "@/components/loginInput/loginInput"

	export default {
		components: {
			loginInput
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.login {
		background: #fff;
		height: 100%;
	}
	
	header {
		width: 100%;
		height: 212px;
		background: #f6f6f6;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		
		div {
			text-align: center;
			margin-bottom: 40px;
		}
	}
	
	.p {
		margin: 20px 0;
		padding: 5px 0;
		>span {
			display: inline-block;
			padding: 0 15px;
			font-size: 13px;
			height: 12px;
			line-height: 12px;
			&:first-child {
				border-right: 1px solid #444;
			}
		}
	}
	.router-link-active {
		color: #f14382;
	}
	.content {
		height: 500px;
	}
</style>