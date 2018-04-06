<template>
	<div class="register">
		<el-steps :active="0" align-center>
			<el-step title="开启你的糖堆生活"></el-step>
			<el-step title="手机号绑定"></el-step>
			<el-step title="完善注册信息"></el-step>
			<el-step title="选择你的喜好"></el-step>
		</el-steps>
		<div class="outside">
			<p>使用合作网站账号链接，轻松注册堆糖。</p>
			<p>（堆糖通过第三方的安全接口绑定账号，同步发送任何信息之前，都将征求您的同意。）</p>
			<div class="login">
				<a href="#">
					<p></p>
					<span>使用微博账号注册</span>
				</a>
				<a href="#">
					<p></p>
					<span>使用 QQ 账号注册</span>
				</a>
				<a href="#">
					<p></p>
					<span>使用豆瓣账号注册</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.register {
		/*position: relative;*/
	}
	.outside {
		text-align: center;
		margin: 50px 0;
		p {
			&:first-child {
				font-size: 14px;
				color: #444;
			}
			&:nth-child(2) {
				font-size: 12px;
				color: #888;
			}
			
		}
	}
	.login {
		margin-top: 50px;
		a {
			display: block;
			margin: 10px auto;
			padding: 10px 10px;
			border: 1px solid #d4d4d4;
			border-radius: 5px;
			width: 160px;
			height: 28px;
			text-decoration: none;
			align-items: center;
			color: #666;
			display: flex;
			justify-content: center;
			font-size: 14px;
			&:nth-child(1) {
				p {
					background: url(../../../../static/image/login.png) no-repeat;
				}
			}
			&:nth-child(2) {
				p {
					background: url(../../../../static/image/login.png) no-repeat -30px 0;
				}
			}
			&:nth-child(3) {
				p {
					background: url(../../../../static/image/login.png) no-repeat -60px 0;
				}
			}
			p {
			   margin: 0;
			   padding: 0; 
			   width: 30px;
			   height: 30px;
			}
			span {
				margin: 0 5px;
			}
		}
	}
</style>