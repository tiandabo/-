<template>
	<div class="header">
		<div class="dt-nav">
			<div class="logo" v-if="home" @click="reload"></div>
			<router-link to="/home" tag="div" class="logo" v-else></router-link>
			<div class="select">
				分类
				<i></i>
				<p class="span"></p>
				<div class="dt-nav-border">
					<div id="dt-nav-left">
						<div class="dt-nav-group">
							<router-link to="/home">首页</router-link>
							<a href="#/">热门</a>
							<router-link to="/buy">良品购</router-link>
						</div>
					</div>
					<div id="dt-nav-right">
						<div class="dt-nav-group">
							<a href="#/">1家居生活</a>
							<a href="#/">美食菜谱</a>
							<a href="#/">手工DIY</a>
							<router-link to="/">手工DIY</router-link>
						</div>
						<div class="dt-nav-group">
							<router-link to="/">时尚搭配</router-link>
							<router-link to="/">美妆造型</router-link>
							<router-link to="/">婚纱婚礼</router-link>
						</div>
						<div class="dt-nav-group">
							<router-link to="/">设计</router-link>
							<router-link to="/">古风</router-link>
							<router-link to="/">插画绘画</router-link>
						</div>
						<div class="dt-nav-group">
							<router-link to="/">壁纸</router-link>
							<router-link to="/">头像</router-link>
							<router-link to="/">文字句子</router-link>
						</div>
						<div class="dt-nav-group">
							<router-link to="/">旅行</router-link>
							<router-link to="/">摄影</router-link>
							<router-link to="/">人文艺术</router-link>
						</div>
					</div>
				</div>

			</div>
			<div class="dt-search">
				<form class="search">
					<!--@blur="none"-->
					<input type="text" id="search" v-model="search" placeholder="搜索感兴趣的内容" @focus="block"  @blur="none"/>
					<input type="hidden" name="type" value="feed" />
					<router-link tag="button" :to="'/search/'+search+'/content'"></router-link>
				</form>
				<ul v-show="search" id="search-content" @mousemove="move" @mouseout="out">
					<router-link tag="li" :to="'/search/'+search+'/content'">搜索含<span>{{search}}</span>的内容</router-link>
					<router-link tag="li" :to="'/search/'+search+'/shop'">搜索含<span>{{search}}</span>的商品</router-link>
					<router-link tag="li" :to="'/search/'+search+'/zhuan'">搜索含<span>{{search}}</span>的专辑</router-link>
					<router-link tag="li" :to="'/search/'+search+'/peo'">搜索含<span>{{search}}</span>的糖人</router-link>
				</ul>
			</div>
		</div>

		<div class="dt-nav-right">
			<ul>
				<li class="lione">
					<router-link tag="span" to="/lazy">堆糖生活家</router-link><button class="buttonone">new</button>
				</li>
				<li>
					<router-link to="/login/register" tag="button" class="buttontwo">注册</router-link>
				</li>
				<li>
					<div><span @click="opens">登录</span></div>
				</li>
				<li>
					<div class="code">
						<i class="phone-icon"></i><span>手机版</span><i class="dt-icons"></i>
						<div class="coldimg">
							<img src="static/image/二维码.png" />
							<p>扫一扫下载手机客户端</p>
						</div>

					</div>
				</li>
			</ul>
		</div>
		<aside class="return_top" v-if="showBackStatus">
			<div class="back_top_svg">
				<span class="a1">
					<a href="javascript:scrollTo(0,0)">回到<br />顶部</a>
				</span>
				<span class="a2">
					<router-link to="/app">手机<br />应用</router-link>
				</span>
				<span class="a3">
					<a href="javascript:scrollTo(0,0)">反馈<br />意见</a>
				</span>
			</div>
		</aside>
		<alerts></alerts>
	</div>
</template>
<script>
	import alerts from '@/components/alertTip/alert'
	import { mapState, mapMutations } from 'vuex'
	import {
		showBack,
		animate,
	} from '@/config/mUtils'
	import $ from 'jquery'
	export default {
		name: "header",
		data() {
			return {
				show: false, //下拉
				alerts: true, //登录弹框
				showBackStatus: false,
				search: '', //搜索内容
				close: true //
			}
		},
		props: ['home'],
		mounted() {
			this.initData();
			this.hover()
		},
		computed: mapState([
			'altTip'
		]),
		methods: {
			...mapMutations([
				'increment'
			]),
			opens() {
				this.increment()
			},
			reload() {
				window.location.reload()
			},
			async initData() {
				//开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
				showBack(status => {
					this.showBackStatus = status;
				});
			},
			move() {
				this.close = false;
			},
			out() {
				this.close = true;
			},
			none() {
				if(this.close==true) {
					$("#search-content").css("display","none")
				}
				
			},
			block() {
				if(this.search) {
					$("#search-content").css("display","block")
				}

			},
			hover() {
				$("#search-content").children("li").hover(function() {
					$(this).css("background", "#ebebeb");
					$(this).siblings("li").css("background", "#fff")
				},function() {
					$(this).css("background", "#fff");
					$(this).siblings("li").css("background", "#fff");
					$(this).siblings("li").eq(0).css("background", "#ebebeb");
				})
			}

		},
		components: {
			alerts
		}
	}
</script>
<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	#search-content {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
		margin-top: 3px;
		margin-left: -1px;
		background: #fff;
		border: 1px solid #D4D4D4;
		overflow: hidden;
		li {
			width: 100%;
			height: 100%;
			font-size: 13px;
			height: 20px;
			margin: 0;
			line-height: 20px;
			padding-left: 5px;
			color: #888;
			&:first-child {
				background: #ebebeb;
			}
			span {
				color: #f14382;
				margin: 0 5px;
			}
		}
	}
	
	.dt-nav-group {
		a:hover {
			text-decoration: underline;
		}
	}
	
	.header {
		background: #fff;
		position: fixed;
		bottom: auto;
		z-index: 10;
		width: 100%;
		height: 65px;
		left: 0px;
		right: auto;
		top: 0px;
			box-shadow:2px 3px 3px lightgray;
		padding: 0 10%;
		.dt-nav {
			width: 40%;
			display: inline-block;
			height: 65px;
			.logo {
				width: 80px;
				height: 60px;
				display: inline-block;
				background: url(https://b-ssl.duitang.com/uploads/files/201312/24/20131224171644_TXGCC.png) 0 12px no-repeat;
				text-indent: -9999px;
				float: left;
				&:hover {
					cursor: pointer;
				}
			}
			.select {
				width: 68px;
				height: 28px;
				color: #666;
				line-height: 26px;
				text-align: center;
				background-color: #fff;
				border: 1px solid #fff;
				cursor: pointer;
				border-radius: 2px;
				margin-left: 22px;
				margin-top: 18px;
				font-size: 14px;
				float: left;
				border: 1px solid #D4D4D4;
				&:hover {
					i {
						transform: rotate(180deg);
					}
					.span,
					.dt-nav-border {
						display: block;
					}
				}
				i {
					overflow: hidden;
					display: inline-block;
					width: 10px;
					height: 10px;
					margin-top: 2px;
					margin-left: 4px;
					background-image: url(https://b-ssl.duitang.com/uploads/people/201312/24/20131224174700_CXfn4.png);
					background-repeat: no-repeat;
					background-position: 0 0;
				}
			}
			.dt-search {
				width: 364px;
				height: 32px;
				margin-left: 45px;
				float: left;
				line-height: 32px;
				font-size: 14px;
				margin-top: 14px;
				padding: 0;
				border: 1px solid #D4D4D4;
				form {
					position: relative;
					background-color: #fff;
					width: 364px;
					height: 30px;
					color: #666;
					input {
						width: 320px;
						border: none;
						outline: none;
						height: 28px;
						font-size: 14px;
						padding: 0px 3px;
					}
					input::placeholder {
						color: #666;
						font-size: 12px;
					}
					button {
						position: absolute;
						top: 0;
						right: 0;
						width: 38px;
						height: 30px;
						outline: 0;
						border: 0 none;
						background-image: url(https://b-ssl.duitang.com/uploads/people/201506/17/20150617214247_ufaUM.png);
						background-repeat: no-repeat;
						background-position: 6px 1px;
						background-color: #fff;
						text-indent: -9999px;
						cursor: pointer;
					}
				}
			}
		}
		.lione {
			display: flex;
			align-items: center;
			span {
				margin-left: 15px;
			}
		}
		.dt-nav-right {
			width: 40%;
			display: inline-block;
			margin-left: 170px;
			margin-bottom: 16px;
			ul {
				list-style: none;
				li {
					float: left;
					text-align: center;
					border-left: 1px solid #ccc;
					width: 65px;
					font-size: 13px;
					height: 27px;
					color: #444;
					padding: 2px 7px;
					line-height: 30px;
					div {
						text-align: center;
					}
					span {
						&:hover {
							cursor: pointer;
						}
					}
					.buttonone {
						width: 30px;
						height: 19px;
						&:hover {
							cursor: auto;
						}
					}
					.buttontwo {
						width: 56px;
						height: 27px;
					}
					button {
						display: block;
						text-decoration: none;
						color: #fff;
						vertical-align: middle;
						border: 1px solid #f46;
						text-align: center;
						background-color: #f46;
						border-radius: 3px;
						margin-left: 4px;
					}
				}
				li:nth-child(1) {
					width: 140px;
					height: 23px;
					margin-top: 3px;
				}
				li:nth-child(4) {
					width: 110px;
					i {
						padding: 0px 4px;
						margin-left: 9px;
					}
				}
			}
		}
	}
	
	.dt-nav-border {
		position: absolute;
		display: none;
		top: 60px;
		left: 253.5px;
		padding: 20px;
		background: #fff;
		border: 1px solid #D4D4D4;
		#dt-nav-left {
			width: 121px;
			height: 234px;
			display: inline-block;
			text-align: left;
			float: left;
			border-right: 1px solid #ebebeb;
			overflow: hidden;
			.dt-nav-group {
				width: 66px;
				height: 86px;
				margin-left: 10px;
				display: inline-block;
				padding-right: 39px;
				padding-bottom: 18px;
				float: left;
				a {
					width: 66px;
					display: inline-block;
					padding: 3px 5px;
					text-decoration: none;
					font-size: 13px;
					line-height: 1.5;
					color: #444;
					border-radius: 2px;
				}
				a:nth-child(3) {
					height: 60px;
					line-height: 60px;
				}
			}
		}
		#dt-nav-right {
			width: 351px;
			display: inline-block;
			text-align: left;
			float: left;
			margin-left: 13px;
			.dt-nav-group {
				width: 304px;
				height: 43px;
				line-height: 43px;
				margin: 0;
				padding: 0;
				padding-top: 1px;
				background: url(https://b-ssl.duitang.com/uploads/people/201312/20/20131220173009_fH3Ym.png) repeat-x;
				background-position: bottom;
				a {
					display: inline-block;
					border-right: 1px solid #D4D4D4;
					height: 10px;
					padding: 3px 9px;
					text-decoration: none;
					font-size: 13px;
					line-height: 10px;
					color: #444;
					border-radius: 2px;
				}
			}
		}
	}
	
	.span {
		position: absolute;
		display: none;
		width: 68.5px;
		height: 20px;
		top: 41px;
		left: 253.5px;
		z-index: 10;
		border-left: 1px solid #D4D4D4;
		border-right: 1px solid #D4D4D4;
		background: #fff;
	}
	
	.phone-icon {
		display: inline-block;
		width: 11px;
		height: 19px;
		background: url(https://b-ssl.duitang.com/uploads/people/201605/23/20160523121159_Er5vL.png) no-repeat;
		position: relative;
		top: 4px;
	}
	
	.dt-icons {
		overflow: hidden;
		display: inline-block;
		width: 10px;
		height: 10px;
		margin-top: 10px;
		margin-left: 4px;
		background-image: url(https://b-ssl.duitang.com/uploads/people/201312/24/20131224174700_CXfn4.png);
		background-repeat: no-repeat;
		background-position: 0 0;
	}
	
	.code {
		position: relative;
		.coldimg {
			position: absolute;
			top: 45px;
			right: 0px;
			background: ur;
			border: 1px solid #D9D9D9;
			background: #fff;
			padding: 20px;
			font-size: 14px;
			color: #666;
			display: none;
		}
		&:hover {
			.dt-icons {
				transform: rotate(180deg) translateX(10px);
			}
			.coldimg {
				display: block;
			}
		}
	}
	
	.return_top {
		position: fixed;
		bottom: 140px;
		right: 100px;
		.back_top_svg {
			width: 50px;
			height: 150px;
			>span {
				margin: 0;
				padding: 0;
				display: inline-block;
				width: 48px;
				height: 48px;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				border: 1px solid #dedfe0;
				background-repeat: no-repeat;
				&:hover {
					a {
						display: block;
					}
				}
				a {
					float: left;
					text-decoration: none;
					text-align: justify;
					display: none;
					background: #fff;
					font-size: 12px;
					margin: 0;
					color: #666
				}
			}
			.a1 {
				background-image: url(https://b-ssl.duitang.com/uploads/people/201507/29/20150729111454_2mytP.png);
				background-position: -1100px -240px;
			}
			.a2 {
				background-image: url(https://b-ssl.duitang.com/uploads/people/201507/29/20150729111454_2mytP.png);
				background-position: -1100px -287px;
			}
			.a3 {
				background-image: url(https://b-ssl.duitang.com/uploads/people/201507/29/20150729111454_2mytP.png);
				background-position: -1100px -335px;
			}
			span::selection {
				background: #000;
				color: #F2DEDE;
				text-shadow: 2px 2px 5px #FFFF2E;
			}
		}
	}
</style>