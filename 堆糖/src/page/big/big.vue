<template>
	<div class="id">
		<heads></heads>
		<div class="content">
			<div class="id-header-bg">
				<div class="id-bg-icon">
					<span class="iconfont-left" @click="left"></span>
					<span class="iconfont-right" @click="right"></span>
				</div>
			</div>

			<div class="img">
				<div class="woocov">
					<button class="x-button"><a href="#/"><span class="xing"></span><span>收集33</span></a></button>
					<span class="iconfont"></span>
				</div>
				<img :src="index.photo.path" />
				<p>{{index.msg}}</p>
			</div>
		</div>
		<div class="down">
			<ul class="phone-userinfo">
				<li>
					<div class="data">

						<img :src="index.sender.avatar" class="userinfo" />
						<div>
							<p><span>{{index.sender.username}}</span><span>12月9日 0:00</span></p>
							<p>发布到{{index.album.name}}</p>
						</div>
					</div>

					<div class="choose">
						<img :src="index.album.covers" />
						<div class="choose-r">
							<p>{{index.album.name}}
							</p>
							<p>{{index.album.count}}张图片
							</p>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<foots></foots>
	</div>
</template>
<script>
	import {
		setStore,
		getStore
	} from '../../../src/config/mUtils'
	import heads from "@/components/Header/header"
	import foots from "@/components/childfoot/childfoot"
	export default {
		name: "id",
		data() {
			return {
				id: [],   
				index: '',
				data: []
			}
		},
		async mounted() {
			let res = getStore("id");
			let id = this.$route.params.id;
			this.data = JSON.parse(res);
			this.id = this.data.filter(item => {
				return item.id == id;
			})
			this.index = this.id[0];
			console.log("1"+this.index.msg)
			console.log("2"+this.data[4].msg)
			console.log(this.data.indexOf(this.index))

		},
		methods: {
			left() {
				console.log(this.index)
				let res = this.data.indexOf(this.index)
				console.log(this.data[res-1].msg)
				this.index = this.data[res-1]
//				console.log(a.photo)
//				console.log(this.data.indexOf(a))
			},
			right() {
				let res = this.data.indexOf(this.index)
				this.index = this.data[res+1]
			}
		},

		components: {
			heads,
			foots
		}
	}
</script>
<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.id {
		padding-top: 66px;
		background: #F1F2F3;
	}
	
	.content {
		position: relative;
		width: 100%;
		height: 800px;
		padding-top: 50px;
		background: url(https://b-ssl.duitang.com/uploads/item/201711/29/20171129124521_EuQcK.thumb.500_500_g.jpeg) no-repeat;
		background-size: 100%;
	}
	
	.down {
		width: 80%;
		margin: 50px auto;
	}
	
	.id-header-bg {
		width: 70%;
		margin: 0 auto;
		height: 400px;
		.id-bg-icon {
			width: 100%;
			height: 400px;
			line-height: 400px;
			margin-top: 286px;
			text-align: center;
			.iconfont-left {
				display: inline-block;
				width: 64px;
				float: left;
				height: 72px;
				line-height: 72px;
				background: url(https://b-ssl.duitang.com/uploads/people/201406/05/20140605183137_ESM5m.png) no-repeat;
				background-position: 0 0;
			}
			.iconfont-right {
				display: inline-block;
				width: 64px;
				height: 72px;
				float: right;
				line-height: 72px;
				float: right;
				background: url(https://b-ssl.duitang.com/uploads/people/201406/05/20140605183137_ESM5m.png) no-repeat;
				background-position: 0 0;
				transform: rotate(-180deg);
			}
		}
	}
	
	.img {
		margin: 0 auto;
		text-align: center;
		background: #fff;
		position: relative;
		top: -700px;
		width: 508px;
		height: 766px;
		.woocov {
			width: 94%;
			height: 64px;
			line-height: 64px;
			background: #fff;
			text-align: left;
			padding: 0px 13px;
			border-bottom: 1px solid #de;
			.x-button {
				width: 79px;
				height: 30px;
				line-height: 30px;
				background-color: #f46;
				border: 1px solid #f46;
				border-radius: 3px;
				.xing {
					width: 16px;
					height: 30px;
					display: inline-block;
					float: left;
					background: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png) 220px -22px;
				}
				a {
					display: inline-block;
					text-decoration: none;
					color: white;
					font-size: 10px;
				}
			}
			.iconfont {
				float: right;
				width: 40px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 2px;
				margin-left: 20px;
				background-color: #fff;
				margin: 16px 16px 16px 0;
				border: 1px solid #d6d6d6;
				background: url(https://b-ssl.duitang.com/uploads/people/201401/10/20140110112106_SeTRJ.png) no-repeat;
				background-position: -110px 5px;
			}
		}
		img {
			border-top: 1px solid #ebebeb;
			padding: 16px 0px;
			width: 476px;
			height: 596px;
		}
	}
	
	.phone-userinfo {
		width: 60%;
		background: #fff;
		border-radius: 2px;
		color: #444;
		list-style: none;
		padding: 9px 8px;
		border-bottom: 1px solid lavender;
		.data {
			width: 100%;
			margin: 0 auto;
			background: #fff;
			div {
				color: black;
				font-size: 14px;
				display: inline-block;
				margin-left: 12px;
				p {
					span:nth-child(2) {
						color: #999;
						margin-left: 1%;
						font-size: 10px;
					}
				}
			}
			.userinfo {
				width: 36px;
				height: 36px;
				border-radius: 50%;
			}
		}
		.choose {
			width: 90%;
			height: 100px;
			margin-left: 50px;
			border-bottom: 1px solid #ebebeb;
			margin-top: 3%;
			background: #E1E1E1;
			img {
				width: 100px;
				height: 100px;
				float: left;
			}
			.choose-r {
				padding: 5px;
				float: left;
				p {
					font-size: 13px;
					font-size: 13px;
					color: black;
					font-weight: 700;
				}
				p:nth-child(2) {
					color: #666;
					margin-top: 10px;
					font-size: 10px;
				}
			}
		}
		.choose:hover {
			width: 93%;
			color: red;
		}
	}
</style>