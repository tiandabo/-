<template>
	<div class="head">
		<alertTip></alertTip>
		<div class="lazy">
			<div class="swiper-container" style="overflow: hidden;">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="header">
							<div class="dt-nav">
								<div class="logo" v-if="home" @click="reload"></div>
								<router-link to="/home" v-else><img style="margin-top: 3%;" src="https://b-ssl.duitang.com/uploads/files/201312/24/20131224171644_TXGCC.png"></router-link>
							</div>

							<div class="dt-nav-right">
								<ul>
									<li>
										<router-link to="/login/register" tag="button" class="buttontwo">注册</router-link>
									</li>
									<li>
										<div><span @click="opens">登录</span></div>
									</li>

								</ul>
							</div>

						</div>

						<div class="content" style="background: url(https://b-ssl.duitang.com/uploads/people/201608/18/20160818104645_f5QSv.png);">

							<div class="dt-top">
								<img style="height: 44px;" src="https://b-ssl.duitang.com/uploads/people/201608/18/20160818104651_h4i5u.png" />
								<div class="pg-img">生活不仅是活着，还需要一点仪式感</div>
								<div class="pg-sub">／这种认真的生活态度，是感受幸福的条件／</div>
							</div>
							<div class="bg-become">
								<button>成为堆糖生活家 ></button>
							</div>

						</div>
					</div>
					<div class="swiper-slide">
						<div class="pg-cont">

							<div class="one"><img style="width: 600px;margin-left:100px;margin-top:50px;float:left;height: 450px;" src="https://b-ssl.duitang.com/uploads/people/201608/18/20160818104653_VsaUu.png" /></div>
							<div class="pg-center">

								<div class="pg-line-before" style="width: 42px; height: 2px;  background: #000;"></div>
								<div class="pg-title">研究生活细节 分享美好时光</div>
								<div class="pg-content">

									在这里，你可以记录：<br/> 美食烹饪心得、美妆护肤评测；

									<br/> 影音书观后感、旅行风光游记；

									<br/> 住家收纳经验、手作心得教程；

									<br/> 绘画心路历程、铲屎官人日记......

									<br/>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="pg-contt">
							<div class="two" style="width:30%;height:500px;text-align: center;"><img style="width: 400px;height: 500px;margin-left:200px;float:left;" src="https://b-ssl.duitang.com/uploads/people/201608/18/20160818104651_nRwPk.png" /></div>
							<div class="pg-center">

								<div class="pg-line-before" style="width: 42px; height: 2px;  background: #000;"></div>
								<div class="pg-title">研究生活细节 分享美好时光</div>
								<div class="pg-content">

									在这里，你可以记录：<br/> 美食烹饪心得、美妆护肤评测；

									<br/> 影音书观后感、旅行风光游记；

									<br/> 住家收纳经验、手作心得教程；

									<br/> 绘画心路历程、铲屎官人日记......

									<br/>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="contentt" style="background: url(https://b-ssl.duitang.com/uploads/people/201608/18/20160818104618_KtRJn.png) 100% 100%;">

							<div class="dt-top">
								<img style="height: 44px;" src="https://b-ssl.duitang.com/uploads/people/201608/18/20160818104651_h4i5u.png" />
								<div class="pg-img">生活不仅是活着，还需要一点仪式感</div>
								<div class="pg-sub">／这种认真的生活态度，是感受幸福的条件／</div>
							</div>
							<div class="bg-become">
								<button @click="opens">成为堆糖生活家 ></button>
							</div>
						</div>
					</div>

				</div>
				<div class="swiper-button-next"></div>
				<div class="swiper-pagination"></div>
				<button class="top" @click="top"></button>

			</div>

		</div>
	</div>

</template>
<script src="static/echo.min.js"></script>

<script>
	import {
		showBack,
		animate,
	} from '@/config/mUtils'
	import { mapState, mapMutations } from 'vuex'
	import alertTip from '@/components/alertTip/alert'
	import fall from '@/components/fall/fall'

	export default {
		name: "header",
		data() {
			return {
				show: false, //下拉
				alerts: true, //登录弹框
				showBackStatus: true,
				index: ''
			}
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
			top() {
				location.href(scroll(0, 0))
			}
		},
		props: ['home'],
		mounted() {
			document.body.style.overflowY = "hidden";
			var mySwiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				direction: 'vertical',
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				keyboardControl: true,
				mousewheelControl: true,
				autoplay: 3000,
				onSlideChangeStart: function(swiper) {
					this.index = swiper.activeIndex;
					swiper.activeIndex = this.index
				}
			})
		},
		destroyed() {
			document.body.style.overflowY = "auto";
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
			top() {
				this.index==0
			}
			
		},
		components: {
			alertTip

		}
	}
</script>
<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	.top {
		width: 25px;
		height: 25px;
		position: fixed;
		background: url(https://b-ssl.duitang.com/uploads/people/201608/19/20160819182035_F4zHV.png) no-repeat;
		background-size: 100% 100%;
		border-radius: 50%;
		right: 38px;
		top: 57%;
		margin: 0 auto;
		border: none;
		outline: none;
		z-index: 1000;
	}
	
	.dt-nav-group {
		a:hover {
			text-decoration: underline;
		}
	}
	
	.swiper-container {
		width: 100%;
		height: 860px;
	}
	
	.header {
		background: rgba(255, 255, 255, .9);
		position: absolute;
		bottom: auto;
		z-index: 9;
		width: 100%;
		height: 75px;
		left: 0px;
		right: 0px;
		padding: 0 4%;
		.dt-nav {
			width: 30%;
			display: inline-block;
			height: 65px;
			float: left;
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
			width: 19%;
			height: 100%;
			line-height: 100%;
			display: inline-block;
			float: right;
			margin-top: 1%;
			ul {
				list-style: none;
				li {
					float: left;
					text-align: center;
					width: 10%;
					font-size: 13px;
					height: 27px;
					color: #444;
					padding: 2px 3px;
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
					width: 80px;
					height: 23px;
					margin-top: 3px;
					border-right: 1px solid #D4D4D4;
				}
				li:nth-child(2) {
					width: 65px;
					text-align: center;
					i {
						padding: 0px 4px;
						margin-left: 9px;
					}
				}
			}
		}
	}
	
	.span {
		position: absolute;
		display: none;
		width: 68.1px;
		height: 20px;
		top: 41px;
		left: 90%;
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
				transform: rotate(180deg) translateX(7px);
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
	
	.content,
	.contentt {
		width: 100%;
		height: 800px;
		padding-top: 4%;
		.dt-top {
			text-align: center;
			margin-top: 15%;
			img {
				margin-bottom: 30px;
			}
			.pg-img {
				font-size: 45px;
				font-weight: 400;
				padding-bottom: 11px;
				color: #000;
				margin-top: 2%;
			}
			.pg-sub {
				font-size: 26px;
				font-weight: 300;
				color: #777;
				margin-top: 6%;
				padding-bottom: 50px;
			}
		}
		.bg-become {
			display: inline-block;
			width: 100%;
			height: 60px;
			line-height: 60px;
			font-size: 20px;
			color: #fff;
			text-align: center;
			cursor: pointer;
			button {
				display: inline-block;
				width: 220px;
				height: 60px;
				line-height: 60px;
				border: 1px solid #FF7D7C;
				border-radius: 100px;
				font-size: 20px;
				color: #fff;
				background: #ff7d7c;
				cursor: pointer;
			}
		}
	}
	
	.pg-cont,
	.pg-contt {
		display: inline-block;
		width: 100%;
		height: 800px;
		position: relative;
		background: #fff;
		padding-top: 10%;
		.pg-center {
			width: 39%;
			height: 300px;
			float: right;
			display: inline-block;
			margin-top: 4%;
			.pg-title {
				font-size: 24px;
				font-weight: 500;
				color: #000;
				margin-bottom: 8%;
			}
			.pg-content {
				text-align: left;
				font-size: 16px;
				font-weight: 400;
				line-height: 2;
				color: #000;
			}
		}
		.one {
			width: 60%;
			display: inline-block;
			float: left;
		}
		.two {
			width: 120px;
			text-align: right;
			display: inline-block;
			float: left;
		}
	}
	
	.lazy .swiper-pagination {
		.active {
			width: 15px;
			height: 15px;
			border-radius: 50%;
			margin-top: 9%;
			background: #ff7d7c;
		}
	}
</style>