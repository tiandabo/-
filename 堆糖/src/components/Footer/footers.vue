<template>
	<div class="footer">
		<ul class="foot">
			<li class="foot-li">
				<p>关于我们</p>
				<div class="foot-about">
					<span>
						<a href="#/">关于我们</a>
						<a href="#/">加入我们</a>
						<a href="#/">联系我们</a>
						<a href="#/">商务合作</a>
						</span><span><a href="#/">帮助中心</a>
						<a href="#/">堆糖收集工具</a>
						<a href="#/">标签集</a>
						<a href="#/">免责声明</a>
					</span>
				</div>
			</li>
			<li>
				<p>手机应用</p>
				<div class="foot-about">
					<span>
						<a href="#/">
堆糖客户端</a>
						<a href="#/">
堆糖良品购</a>
						</span><span><a href="#/">
爱疯了壁纸</a>
						
					</span>
				</div>
			</li>
			<li class="erweima">
				<div class="img"><img src="https://b-ssl.duitang.com/uploads/people/201605/06/20160506140111_ycQzR.png" /></div>
				<div>二维码</div>
				<div>手机客户端</div>
			</li>
			<li>
				<p>关注我们</p>
				<div class="foot-about">
					<span>
						<a href="#/">
新浪微博</a>
			
						</span><span><a href="#/">
微信</a>
						
					</span>
				</div>
			</li>
			<li>
				<p>友情链接</p>
				<div class="foot-about">
					<span>
						<a href="#/">
爱物网</a>
						<a href="#/">
肉丁网</a>
						<a href="#/">
美食美酒网</a>
						</span><span><a href="#/">
东方女性网</a>
						<a href="#/">
LADYMAX时尚</a>
						<a href="#/">
携程攻略</a>
					</span>
				</div>
			</li>
		</ul>
		<div class="dt-footer-icp">
			<span>©2017 duitang.com 版权所有。</span>
			<a href="http://www.miitbeian.gov.cn">沪ICP备10038086号-3</a>
			<a class="zx"></a>
			<a class="lgw"></a>
			<a class="pinpai"></a>
		</div>
	</div>
</template>
<script>
	export default {
		name: "footer",
		data() {
			return {
				show: false, //下拉
			}
		},
		async mounted() {

		}
	}
</script>
<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	a::selection {
		color: lightcoral;
		background: lightblue;
	}
	.footer {
		width: 100%;
		height: 170px;
		background-color: #e1e2e3;
		border-top: 1px solid #d8d9da;
		padding: 22px 0;
		/*user-select:none;*/
		
		.foot {
			width: 1200px;
			height: 166px;
			margin: 0 auto;
			.erweima {
				.img {
					margin: 0 auto;
					width: 83px;
					height: 83px;
					background: #fff;
					padding: 10px;
					img {
						width: 80px;
						height: 80px;
					}
				}
				div {
					text-align: center;
					font-size: 14px;
					color: #444;
				}
			}
			li {
				float: left;
				width: 234px;
				height: 142px;
				border-left: 1px solid #cfd0d1;
				p {
					width: 220px;
					float: left;
					font-size: 15px;
					color: #444;
					text-align: left;
					padding: 9px 20px;
				}
				.foot-about {
					width: 234px;
					height: 100px;
					padding: 10px 10px;
					span {
						width: 90px;
						display: inline-block;
						float: left;
						padding: 9px 10px;
						a {
							text-decoration: none;
							float: left;
							width: 100px;
							height: 30px;
							font-size: 13px;
							color: #666;
						}
					}
				}
			}
		}
		.dt-footer-icp {
			background-color: #e1e2e3;
			margin: 5px auto;
			margin-top: 20px;
			font-size: 13px;
			height: 47px;
			text-align: center;
			line-height: 47px;
			color: #888;
			a {
				text-decoration: none;
				color: #888;
			}
			.zx {
				margin-left: 10px;
				display: inline-block;
				width: 128px;
				height: 36px;
				background: url(https://b-ssl.duitang.com/uploads/people/201507/29/20150729111454_2mytP.png) no-repeat;
				background-position: -920px -490px;
				vertical-align: middle;
			}
			.lgw {
				background: url(https://b-ssl.duitang.com/uploads/people/201604/05/20160405130936_RAzMK.png) no-repeat;
				display: inline-block;
				vertical-align: middle;
				width: 113px;
				height: 36px;
				margin-left: 10px;
			}
			.pinpai {
				background: url(https://b-ssl.duitang.com/uploads/people/201612/22/20161222154249_ufmCk.jpeg) no-repeat;
				display: inline-block;
				vertical-align: middle;
				width: 96px;
				height: 36px;
				margin-left: 10px;
				background-size: 100% 100%;
			}
		}
	}
</style>