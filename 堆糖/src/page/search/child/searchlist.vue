<template>
	<div>
		<!--<div class="search">
			<input type="text" placeholder="请输入内容" v-model="searchValue">
			<span @click="searchEnd"></span>
		</div>-->
		<div class="header">
			<div class="dt-nav">
				<div class="logo" v-if="home" @click="reload"></div>
				<div class="logo" v-else></div>
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
								<a href="#/">家居生活</a>
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
						<input type="text" placeholder="请输入内容" v-model="searchValue">
						<button @click="searchEnd">搜索</button>
					</form>
				</div>
				<!--<div class="dt-search">
					<form class="search">
						<input type="text" id="search" name="search" placeholder="搜索感兴趣的内容" v-model="searchValue"/>
						<input type="hidden" name="type" value="feed" />
						<button @click="searchEnd">搜索</button>
					</form>
				</div>-->
			</div>

			<div class="dt-nav-right">
				<ul>
					<li class="lione">
						<span>堆糖生活家</span><button class="buttonone">new</button>
					</li>
					<li>
						<!--<router-link to="/login/register" tag="button" class="buttontwo">注册</router-link>-->
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
					<a href="javascript:scrollTo(0,0)">手机<br />应用</a>
				</span>
					<span class="a3">
					<a href="javascript:scrollTo(0,0)">反馈<br />意见</a>
				</span>
				</div>
			</aside>
			<!--<alerts></alerts>-->
		</div>
		<div class="item" v-if="list.length">
			<p v-if="list.length" class="history">历史记录</p>
			<div class="item" v-for="data in list">
				<router-link :to="'/id/'+data.id">
					<div class="woocov">
						<button class="x-button"><a href="#/"><span class="xing"></span><span>收集33</span></a></button>
						<div class="p-button"><span class="p-one"></span><span class="p-two"></span></div>
					</div>
				</router-link>
				<img :src="data.photo.path">
				<p class="title">{{data.msg}}</p>
				<p class="collect">
					<span>
							{{data.favorite_count}}
						</span>
					<span v-if="data.like_count">
							{{data.like_count}}
						</span>
					<span class="price" v-if="data.item">{{data.item.price}}</span>
				</p>
				<div class="sender">
					<div class="sender-portraits">
					</div>
					<div class="sender-username">
						<p>{{data.sender.username}}</p>
						<p>
							<span>收集到</span>
							<span>{{data.album.name}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<p v-if="resultShow" class="footer">很抱歉，没有结果</p>
		<div v-if="ycLishi" class="lishi">
			<p>历史记录</p>
			<p v-for="ls in lishi">{{ ls }}</p>
			<button @click="qingkong()">清空历史</button>
		</div>
	</div>
</template>
<script>
	//import Headers from '@/common/Headers'
	//import {mapState, mapMutations} from 'vuex'
	import {
		fallNews
	} from '@/service/getData'
	import {
		getStore,
		setStore
	} from '../../config/mUtils'
	import {
		showBack,
		animate,
	} from '@/config/mUtils'
	export default {
		data() {
				return {
					list: [],
					res: [],
					fallNews: [],
					searchValue: "",
					searchList: [],
					resultShow: false,
					lishi: [], //历史记录
					ycLishi: true, //隐藏历史记录
					show: false, //下拉
					alerts: true, //登录弹框
					showBackStatus: false,
				}
			},
			async mounted() {
				setStore('id', JSON.stringify(this.res))

				//获取历史记录
				if(getStore('name').length == 0) {
					setStore('name', JSON.stringify(this.lishi))
				}
				this.lishi = JSON.parse(getStore('name'));
				if(this.lishi.length <= 0) {
					this.lishi = []
				}
			},
			//  components: {
			//    Headers,
			//    searchShow
			//  },
			methods: {
				async searchEnd() {

					let res = await fallNews();
					this.res = [...res.object_list];
					console.log(this.res)
					this.list = this.res.filter(item => {
						return item.album.name.indexOf(this.searchValue) > -1
					});
					if(this.list.length > 0) {
						this.resultShow = false;
						this.ycLishi = false;
						
					} else {
						this.resultShow = true;
						this.ycLishi = true;
					}
					//判断是否存在value
					if(!this.searchValue) {
						return
					} else {
						let duicuo = this.lishi.every((item) => {
							return item != this.searchValue;
						})
						if(duicuo) {
							this.lishi.push(this.searchValue)
							this.searchValue = ''
						}
						setStore('name', JSON.stringify(this.lishi))
					}
				},
				qingkong() {
					this.lishi = [];
					window.localStorage.setItem('name', [])
				}
			}
	}
</script>
<style lang="scss" scoped>
	.footer {
			width: 400px;
		text-align: center;
		font-size: 16px;
		margin-top: 200px;
	}
	
	.history {
		width: 400px;
		font-size: 16px;
		margin-top: 100px;
		margin-left: .2rem;
		margin-bottom: .1rem;
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
		z-index: 9;
		width: 100%;
		height: 65px;
		left: 0px;
		right: auto;
		top: 30px;
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
				width: 290px;
				height: 32px;
				margin-left: 45px;
				float: left;
				line-height: 32px;
				font-size: 14px;
				margin-top: 14px;
				border: 1px solid #D4D4D4;
				form {
					position: relative;
					background-color: #fff;
					width: 290px;
					height: 30px;
					color: #666;
					input {
						width: 270px;
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
		left: 236.5px;
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
		left: 236.5px;
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
				transform: rotate(180deg);
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
	
	.lishi {
		font-size: 16px;
		margin-left: .2rem;
		
		button {
			border: none;
			outline: none;
			font-size: 17px;
			display: block;
			margin: 0 auto;
			background: #fff;
			margin-top: .2rem;
		}
		
	}
	.item {
			width: 30%;
			background: #fff;
			position: relative;
			margin-bottom: 36px;
			margin-left: 300px;
			.router {
				width: 100%;
				display: inline-block;
				text-decoration: none;
				color: #444;
			}
			
			.woocov {
				width: 400px;
				display: block;
				height: 35px !important;
				position: absolute;
				top: 2px;
				
				padding: 1%;
				background: rgba(1, 1, 1, .08);
				.x-button {
					width: 20%;
					height: 30px;
					line-height: 20px;
					background-color: #f46;
					border: 1px solid #f46;
					border-radius: 3px;
					.xing {
						width: 15px;
						height: 29px;
						line-height: 28px;
						display: inline-block;
						float: left;
						margin-left: -5px;
						background: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png) 220px -22px;
					}
					a {
						height: 30px;
						line-height: 30px;
						display: inline-block;
						text-decoration: none;
						color: white;
					}
					span:nth-child(2) {
						font-size: 1px;
						float: right;
					}
					p::selection {
						background: #000;
						color: #F2DEDE;
						text-shadow: 2px 2px 5px #FFFF2E;
					}
				}
				.p-button {
					width: 20%;
					height: 24px;
					float: right;
					background: none;
					border: none;
					.p-one {
						width: 35%;
						height: 100%;
						line-height: 50px;
						border-radius: 3px;
						background: white;
						margin: 2px 0;
						background-image: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png);
						background-repeat: no-repeat;
						background-position: -19px 0;
						float: left;
					}
					.p-two {
						width: 35%;
						height: 100%;
						border-radius: 3px;
						line-height: 23px;
						float: right;
						background: white;
						margin-top: 3%;
						background-image: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png);
						background-repeat: no-repeat;
						background-position: -45px 0;
					}
				}
			}
		}
		.title {
			width: 300px;
			overflow: hidden;
			padding: 10px 12px;
			color: #444;
			margin: 0;
			font-size: 12px;
		}
		.collect {
			width: 400px;
			padding: 10px 12px;
			margin: 0;
			span {
				width: 400px;
				color: #bbb;
				font-size: 12px;
				margin-right: 5px;
				img {
					width: 18px;
					height: 18px;
					vertical-align: top;
				}
			}
			span::selection {
				width: 400px;
				background: #000;
				color: #F2DEDE;
				text-shadow: 2px 2px 5px #FFFF2E;
			}
			.price {
				float: right;
				width: 400px;
				color: #f14382;
				font-weight: 700;
				vertical-align: top;
				font-size: 16px;
			}
		}
		.sender {
			width: 400px;
			padding: 8px 11px 7px 11px;
			border-top: 1px solid #f0f0f0;
			div {
				display: inline-block;
			}
		}
		.sender-portraits {
			width: 24px;
			height: 24px;
			margin-right: 12px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				margin-top: -12px;
			}
		}
		.sender-username {
			width: 400px;
			p {
				margin: 0;
				&:first-child {
					font-size: 12px;
					color: #666;
				}
				&:last-child {
					font-size: 12px;
					color: #888;
					span:last-child {
						color: #666;
					}
				}
			}
			p::selection {
				background: #000;
				color: #F2DEDE;
				text-shadow: 2px 2px 5px #FFFF2E;
			}
		}
		.item img {
			width: 100%;
		}
	
</style>