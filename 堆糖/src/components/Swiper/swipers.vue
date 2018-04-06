<template>
	<div class="swiper">
		<el-carousel class="one" :interval="2000" arrow="hover">
			<el-carousel-item class="dt-carousel-img" v-for="item in images" :key="item">
				<img :src="item.imgUrl" />
				<p class="title">
					{{item.title}}
					<span>{{item.writes}}</span>
				</p>
			</el-carousel-item>
		</el-carousel>
		<div class="dt-r-top">
			<h3>社区热点</h3>
			<div class="dt-tag">
				<ul>
					<router-link tag="li" to="/search/阴阳师/content">阴阳师</router-link>
					<router-link tag="li" to="/search/简笔画/content">简笔画</router-link>
					<router-link tag="li" to="/search/折纸/content">折纸</router-link>
					<li>初秋装扮</li>
					<li>当你沉睡时</li>
					<li>观影手帐</li>
					<li>拼豆</li>
					<li>古风</li>
					<li>水彩</li>
				</ul>
			</div>
			<div class="select">
				<h4 class="bottom">
研究同好会 ● 追求形体之美</h4>
				<button>精选</button>
			</div>
			<div class="dt-tr">
				<span>
收图小助手:</span>
				<a href="#/" class="bottom">堆糖收集工具</a>
			</div>
		</div>

		<router-link tag="div" to="/app" class="dt-r-bottom">
			<div class="image"></div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name: "swiper",
		props: ['images'],
		data() {
			return {
			}
		},
		async mounted() {}
	}
</script>
<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	.swiper {
		width: 80%;
		height: 450px;
		margin: 0 auto;
		padding: 50px 0;
		.one {
			width: 712px;
			height: 445px;
			float: left;
			margin-right: 20px;
			.dt-carousel-img {
				display: block;
				width: 100%;
				height: 443px;
				border: 1px solid rgba(0, 0, 0, .08);
				background-position: center center;
				background-repeat: no-repeat no-repeat;
			}
			.el-carousel {
				width: 100%;
				height: 445px;
			}
			.el-carousel__item h3 {
				color: #475669;
				font-size: 18px;
				opacity: 0.75;
				text-align: center;
				line-height: 300px;
				margin: 0;
			}
			.el-carousel__item .caroul_p {
				color: black;
				font-size: 18px;
				opacity: 0.75;
				position: absolute;
				left: 0px;
				top: 0px;
				line-height: 450px;
				margin: 0;
			}
			
			.el-carousel__item:nth-child(2n) {
				background-color: #99a9bf;
			}
			.el-carousel__item:nth-child(2n+1) {
				background-color: #d3dce6;
			}
		}
		.dt-r-top {
			overflow: hidden;
			background-color: #fff;
			width: 404px;
			height: 293px;
			padding: 0px 32px;
			border: 1px solid #dedfe0;
			h3 {
				width: 402px;
				height: 51px;
				color: #444;
				font-weight: 200;
				line-height: 51px;
				font-size: 15px;
				border-bottom: 1px solid #dedfe0;
			}
			.dt-tag {
				width: 402px;
				height: 51px;
				padding: 16px 0px;
				font-family: '\5B8B\4F53';
				border-bottom: 1px dashed #ebebeb;
				ul {
					width: 402px;
					height: 51px;
					li {
						float: left;
						width: 76px;
						height: 14px;
						line-height: 10px;
						margin-top: 9px;
						text-align: center;
						font-size: 13px;
						padding: 0px 2px;
						border-left: 1px solid #dedfe0;
						color: #333;
						&:hover {
							text-decoration: underline;
							cursor: pointer;
						}
					}
					li:nth-child(1) {
						width: 60px;
						border: none;
						text-align: left;
					}
					li:nth-child(6) {
						width: 78px;
						border: none;
						text-align: left;
					}
					li:nth-child(7) {
						width: 61px;
					}
				}
			}
		}
		.bottom {
			&:hover {
				text-decoration: underline;
				cursor:pointer;
			}
		}
		.select {
			width: 402px;
			line-height: 51px;
			h4 {
				float: left;
				padding: 0px 6px;
				color: #444;
				font-size: 13px;
				font-weight: 300;
			}
			button {
				background: #f46;
				color: white;
				display: inline-block;
				font-size: 13px;
				border: 1px solid #f46;
				padding: 3px;
				line-height: 14px;
				height: 20px;
				border-radius: 3px;
			}
		}
		.dt-tr {
			width: 402px;
			height: 51px;
			background: 0 0;
			padding-top: 14px;
			border-top: 1px solid #ebebeb;
			span {
				display: inline-block;
				font-size: 13px;
				line-height: 1.5;
				color: #444;
			}
			a {
				display: inline-block;
				color: #444;
				font-size: 13px;
				line-height: 1.5;
				text-decoration: none;
				margin-left: 10px;
			}
		}
		.dt-r-bottom {
			width: 410px;
			height: 130px;
			display: block;
			float: left;
			display: inline-block;
			margin-top: 20px;
			background-color: #fff;
			text-align: center;
			border: 1px solid #dedfe0;
			.image {
				width: 480px;
				height: 130px;
				display: inline-block;
				background-image: -webkit-image-set(url(https://b-ssl.duitang.com/uploads/people/201606/29/20160629173907_AyjmB.jpeg) 1x, url(https://b-ssl.duitang.com/uploads/people/201606/29/20160629173920_dNxUz.jpeg) 2x);
				background-position: left bottom;
				background-repeat: no-repeat;
			}
		}
	}
	
	.title {
		width: 90%;
		height: 64px;
		position: absolute;
		bottom: 40px;
		left: 5%;
		line-height: 64px;
		color: #fff;
		font-size: 28px;
		padding-left: 17px;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		span {
			margin-left: 30px;
			font-size: 12px;
		}
	}
</style>