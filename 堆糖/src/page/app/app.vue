<template>
	<div class="app">
		<headers></headers>
		<div class="content">
			<div class="top">
				<img class="big-img" src="https://b-ssl.duitang.com/uploads/people/201605/25/20160525133619_XmyK2.png" />
				<div class="right-img">
					<img src="https://a.dtstatic.com/uploads/people/201407/02/20140702124701_rcVJs.png" />
					<h5>堆糖-美好生活研究所</h5>
					<p class="intro-p" style="padding-top: 16px;">堆糖客户端是堆糖的全功能应用。</p>
					<p class="intro-p" style="padding-top: 5px;">在网上能做的，它都可以做到。。</p>
					<p class="intro-down">
						<img src="https://b-ssl.duitang.com/uploads/people/201605/23/20160523132950_Fj3fn.png" />
					</p>
					<p class="dt-intro">
						扫描二维码下载堆糖
					</p>
					<p class="download">
						<a href="/zhushou360://type=apk&name=堆糖&icon=https://b-ssl.duitang.com/uploads/people/201604/06/20160406154648_QFRLw.png&url=http://www.duitang.com/s/0770b85fe8110b8cf ">
							<img alt="使用360手机助手安装" src="http://p3.qhimg.com/t01943097a6b50d1e96.png" />
						</a>
					</p>
				</div>
			</div>
			<div class="bottom">
				<div class="pg-apps">

					<div class="pg-apps-img">

						<div class="footer-img">
							<img class="imgone" src="https://a.dtstatic.com/uploads/files/201404/29/20140429140937_BmSeh.jpeg" />
							<h5>堆糖良品购</h5>
							<p class="intro-p" style="padding-top: 16px;">堆糖推出的购物应用</p>
							<p class="intro-p" style="padding-top: 5px;">扫描二维码下载堆糖良品购</p>
						</div>
						<div class="footer-ecode">
							<img class="imgtwo" src="https://b-ssl.duitang.com/uploads/people/201605/23/20160523163254_zJKaB.png" />
							<p>扫描二维码下载堆糖画报</p>
						</div>
					</div>
					<div class="pg-apps-img">

						<div class="footer-img">
							<img class="imgone" src="https://a.dtstatic.com/uploads/files/201404/29/20140429140947_Ah2Zj.jpeg" />
							<h5>堆糖画报</h5>
							<p class="intro-p" style="padding-top: 16px;">尽皆精选，遨游在色彩的海洋。</p>
							<p class="intro-p" style="padding-top: 5px;">极致简约，专注发掘美好生活。</p>
							<p class="intro-p" style="padding-top: 5px;">闲暇片刻，不经意间邂逅清新。</p>
						</div>
						<div class="footer-ecode">
							<img class="imgtwo" src="https://b-ssl.duitang.com/uploads/people/201605/23/20160523163152_CcKPy.png" />
							<p>扫描二维码下载堆糖良品购</p>
						</div>
					</div>
					<div class="pg-apps-img">

						<div class="footer-img">
							<img class="imgone" src="https://a.dtstatic.com/uploads/files/201404/29/20140429140959_LNeZW.jpeg" />
							<h5>堆糖良品购</h5>
							<p class="intro-p" style="padding-top: 16px;">堆糖推出的购物应用</p>
							<p class="intro-p" style="padding-top: 5px;">扫描二维码下载堆糖良品购</p>
						</div>
						<div class="footer-ecode">
							<img class="imgtwo" src="https://b-ssl.duitang.com/uploads/people/201605/23/20160523163327_fkyYn.png" />
							<p>扫描二维码下载爱疯了壁纸</p>
						</div>
					</div>

				</div>
			</div>
		</div>
		<foot></foot>

	</div>
</template>
<script>
	import {
		setStore,
		getStore
	} from '../../../src/config/mUtils'
	import headers from "@/components/Header/header"
	import foot from "@/components/childfoot/childfoot"
	export default {
		name: "id",
		data() {
			return {
				id: [],
			}
		},
		async mounted() {
			let re = getStore("id");
			let id = this.$route.params.id;
			let local = JSON.parse(re);
			this.id = local.filter(item => {
				console.log(item)
				return item.id == id;

			})
			console.log(this.id)

		},
		components: {
			headers,
			foot
		}
	}
</script>
<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	.app {
		background: #fff;
		width: 100%;
		padding-top: 65px;
		.content {
			width: 100%;
			/*min-height: 600px;*/
			margin: 0 auto;
			padding-bottom: 24px;
			height: 950px;
			.top {
				width: 70%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.big-img {
					width: 385px;
					height: 470px;
					margin-left: 78px;
					margin-top: 45px;
				}
				.right-img {
					width: 300px;
					display: inline-block;
					padding: 78px;
					margin-left: 36px;
					text-align: center;
					font-size: 16px;
					line-height: 14px;
					color: #6a6f72;
					h5 {
						text-align: center;
						padding-top: 24px;
						font-weight: 700;
						color: #333;
						margin-bottom: 7px;
						font-size: 15px;
					}
					.intro-p {
						color: rgba(102, 102, 102, .6);
						text-align: center;
						font-size: 14px;
					}
					.intro-down {
						text-align: center;
						margin-top: 50px;
						img {
							width: 120px;
							height: 120px;
						}
					}
					.dt-intro {
						font-size: 13px;
						padding-top: 20px;
						text-align: center;
						color: #444;
					}
					.download {
						text-align: center;
						padding-top: 20px;
						a:hover {
							color: red;
						}
					}
				}
			}
		}
		.bottom {
			width: 70%;
			margin: 0 auto;
			margin-top: 50px;
				.pg-apps {
				width: 100%;
				height: 279px;
				text-align: center;
				position: relative;
				.pg-apps-img:hover {
					.footer-ecode {
						display: block;
					}
				}
				.pg-apps-img {
					width: 33.33%;
					height: 279px;
					float: left;
					position: relative;
					.footer-img {
						width: 100%;
						height: 279px;
						text-align: center;
						.imgone {
							margin-top: 50px;
							position: relative;
							left: 5px;
						}
						h5 {
							text-align: center;
							padding-top: 14px;
							font-weight: 700;
							color: #333;
							font-size: 15px;
						}
						.intro-p {
							color: rgba(102, 102, 102, .6);
							text-align: center;
							font-size: 13px;
						}
					}
					.footer-ecode {
						width: 80%;
						height: 300px;
						display: none;
						position: absolute;
						background: #fff;
						top: 0px;
						left: 10%;
						text-align: center;
					    border: 1px solid #ebebeb;

						.imgtwo {
							width: 120px;
							text-align: center;
							margin-top: 40px;
						}
						p {
							color: #666;
							margin-top: 24px;
							font-size: 14px;
						}
					}
				}
			}
		}
	}
</style>