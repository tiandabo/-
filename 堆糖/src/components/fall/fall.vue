<template>
	<div id="fall">
		<div class="container">
			<div class="waterfall">
				<router-link class="item" v-for="data in datas"  :to="'/big/'+data.id">
					<div class="woocov">
							<button class="x-button"><a href="#/"><span class="xing"></span><span>收集33</span></a></button>
							<div class="p-button"><span class="p-one"></span><span class="p-two"></span></div>
					</div>
					<img :src="data.photo.path" @click="big">
					<p class="title">{{data.msg}}</p>
					<p class="collect">
						<span>
							<img src="static/image/收 藏_选中状态.png"/>
							{{data.favorite_count}}
						</span>
						<span v-if="data.like_count">
							<img src="static/image/点赞.png"/>
							{{data.like_count}}
						</span>
					  <span class="price" v-if="data.item">{{data.item.price | currency('￥') }}</span>
					</p>
					<div class="sender">
						<div class="sender-portraits">
							<img :src="data.sender.avatar"/>
						</div>
						<div class="sender-username">
							<p class="hover">{{data.sender.username}}</p>
							<p>
								<span>收集到</span>
								<span class="hover">{{data.album.name}}</span>
							</p>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import { setStore } from '../../../src/config/mUtils'
	export default {
		name: "app",
		props: ['datas'],
		data() {
			return {
				aa: []
			};
		},
		mounted() {

		},
		methods:{
			big() {
				setStore("id",this.datas)
				console.log(this.datas)
			}
		},
		filters: {
        currency: function(input, arg1){
            return '￥' + input
        }
    }
	};
</script>

<style lang="scss" scoped>
	/*大层*/
	#fall {
		width: 100%;
		padding: 0;
	}
	.container {
		width: 80%;
		padding: 0;
		margin: 0 auto;
	}
	/*瀑布流层*/
	
	.waterfall {
		-moz-column-count: 5;
		-webkit-column-count: 5;
		column-count: 5;
	}
	/*一个内容层*/
	
	.item {
		padding: 0;
		margin: 0 0px 20px 0;
		-moz-page-break-inside: avoid;
		-webkit-column-break-inside: avoid;
		break-inside: avoid;
		position: relative;
		display: block;
		text-decoration: none;
		border: 1px solid #E3E4E5;
		background: #fff;
		box-shadow: 0px 5px 5px #E3E4E5;
		&:hover {
			.woocov {
				display: block;
			}
		}
	}
	.hover {
		&:hover {
			cursor: pointer;
		}
	}
	.title {
		overflow: hidden;
		padding: 10px 12px;
		color: #444;
		margin: 0;
		font-size: 12px;
		&:hover {
			cursor: pointer;
		}
	}
	.collect {
			padding: 10px 12px;
			margin: 0;
		span {
			color: #bbb;
			font-size: 12px;
			margin-right: 5px;
			img {
				width: 18px;
				height: 18px;
				vertical-align: top;
				
			}
		}
		.price {
		float: right;
    color: #f14382;
    font-weight: 700;
    vertical-align: top;
   	font-size: 16px;
		}
	}
	.sender {
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
	}
	.item img {
		width: 100%;
	}
	.woocov {
			display: none;
			height: 35px;
			position: absolute;
			top: 0px;
			width: 98%;
			padding: 1%;
			background: rgba(1, 1, 1, .08);
			.x-button {
				height: 30px;
				line-height: 20px;
				background-color: #f46;
				border: 1px solid #f46;
				border-radius: 3px;
				margin-left:2%;
				
				.xing {
					width: 14px;
					margin-right: 2px;
					height: 30px;
					line-height: 30px;
					display: inline-block;
					float: left;
					background: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png) 220px -22px;
				}
				a {
					height: 30px;
					line-height: 30px;		
					display: inline-block;
					text-decoration: none;
					color: white;
					font-size: 9px;
				}
				p::selection {
						background: #000;
						color: #F2DEDE;
						text-shadow: 2px 2px 5px #FFFF2E;
					}
			}
			.p-button {
				height: 24px;
				float: right;
				background: none;
				border: none;
				.p-one {
					width: 37px;
					height: 26px;
					line-height: 26px;
					background: white;
					margin: 2px 6px;
					background-image: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png);
					background-repeat: no-repeat;
					background-position: -16px 0;
					float: left;
				}
				.p-two {
					width: 37px;
					height: 26px;
					line-height: 26px;
					float: right;
					background: white;
					margin: 2px 6px;
					background-image: url(https://b-ssl.duitang.com/uploads/people/201405/28/20140528162525_djtAu.png);
					background-repeat: no-repeat;
					background-position: -42.6px 0;
				}
			}
		}
</style>