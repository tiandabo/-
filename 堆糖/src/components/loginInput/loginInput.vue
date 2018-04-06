<template>
	<div class="loginInput">
		<section>
			<form>
				<div>
					<input type="text" placeholder="用户名/邮箱" v-model="username" />
				</div>
				<div>
					<input type="password" placeholder="密码" v-model="password" />
				</div>
				<div>
					<div>
						<input type="text" placeholder="验证码" v-model="valueCold" />
					</div>
					<span class="cold">{{cold}}</span>
				</div>
				<div>
					<p><input type="checkbox" v-model="checked" />记住我</p>
					<span class="password">忘记密码？</span>
				</div>
				<div>
					<router-link tag="button" to="/login/input" v-if="login">登录</router-link>
					<button @click="submit" v-else-if="skip">登录</button>
					<router-link tag="button" to="/home" v-else>登录</router-link>
				</div>
				<div>
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
					<a href="#"></a>
				</div>
			</form>
			<div class="section-right">
				<div>
					<img src="static/image/二维码.png" />
					<p>扫一扫下载手机客户端</p>
					<p>浏览体验更佳</p>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import { logins } from '../../service/getData'
	export default {
		data() {
			return {
				username: "", //用户名
				password: "", //密码
				valueCold: "", //输入验证码
				cold: "", //验证码
				checked: true, //记住我
				skip: true,
				denglu: ''
			}
		},
		props: ['login'],
		mounted() {
			for(let i = 0; i < 4; i++) {
				this.cold += this.ran(9, 0);
			}
		},

		methods: {
			ran(max, min) {
				return parseInt(Math.random() * (max - min + 1) + min);
			},
			async submit() {
				let res = ''
				if(!this.username) {
					res = "用户名不能为空"
				} else if(!this.password) {
					res = "密码不能为空"
				} else if(!this.valueCold) {
					res = "验证码不能为空"
				} else if(this.valueCold != this.cold) {
					res = "验证码错误"
				}else {
					// this.denglu = await logins(this.username, this.password);
					// console.log(this.denglu)
//					if(this.denglu.status == 0) {
//						res = this.denglu.msg
//					} else {
						location.href = "http://localhost:8080/?#/home"
					
//					}

				}

				this.$alert(res, '', {
					confirmButtonText: '确定',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	section {
		width: 100%;
		padding: 40px 0;
		display: flex;
		justify-content: space-between;
	}
	
	form {
		flex: 1;
		border-right: 1px solid #888;
		text-align: center;
		margin: 0;
		>div {
			padding: 0;
			width: 270px;
			height: 38px;
			line-height: 38px;
			margin: 0 50px 15px 50px;
			&:nth-child(1),
			&:nth-child(2) {
				border: 1px solid #666;
				input {
					padding: 0px 10px;
					height: 16px;
					width: 250px;
					border: none;
					line-height: 16px;
					outline: none;
				}
			}
			&:nth-child(3),
			&:nth-child(4) {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				align-items: center;
				outline: none;
				div {
					width: 100px;
					height: 38px;
					line-height: 38px;
					border: 1px solid #666;
					padding: 0px 10px;
					input {
						border: none;
						width: 100%;
						height: 16px;
						line-height: 16px;
						outline: none;
					}
				}
				p {
					height: 16px;
					line-height: 16px;
					input {
						margin-left: 10px;
						vertical-align: middle;
					}
				}
				.cold {
					font-size: 14px;
					color: #888;
				}
			}
			&:nth-child(5) {
				button {
					width: 100%;
					height: 100%;
					border: none;
					margin: 0;
					padding: 0;
					font-size: 16px;
					cursor: pointer;
					font-weight: 200;
					background: #22b4f6;
					color: #fff;
					border-radius: 2px;
				}
			}
			&:nth-child(6) {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				a {
					display: inline-block;
					width: 30px;
					height: 30px;
					&:nth-child(1) {
						background: url(../../../static/image/login.png)no-repeat -30px 0;
					}
					&:nth-child(2) {
						background: url(../../../static/image/login.png)no-repeat;
					}
					&:nth-child(3) {
						background: url(../../../static/image/login.png) -60px 0;
					}
					&:nth-child(4) {
						background: url(../../../static/image/login.png) -95px 0;
					}
					&:nth-child(5) {
						background: url(../../../static/image/login.png) -125px 0;
					}
				}
			}
		}
	}
	
	.password {
		color: "#5678a0";
		&:hover {
			text-decoration: underline;
			color: #a71d5d;
		}
	}
	
	.section-right {
		flex: 1;
		div {
			width: 50%;
			margin: 25px auto;
			img {
				margin-bottom: 30px;
			}
			p {
				padding: 0;
				text-align: center;
				color: #666;
				font-size: 14px;
				margin: 0;
				height: 25px;
				line-height: 25px;
			}
		}
	}
</style>