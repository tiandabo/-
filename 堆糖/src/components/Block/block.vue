<template>
	<div class="block">
		<header>
			<p class="title">{{title}}</p>
			<p v-if="btn"><button class="btns">{{btn}}</button></p>
			<p v-else-if="classify" class="classify">良品购：<span v-for="clify in classify">{{clify.classUrl}}</span></button>
			</p>
			<p v-else></p>
		</header>
		<div class="footer">
			<!--专辑推荐-->
			<div class="zhuanji" v-for="zhuanji in zhuanjis" v-if="one">
				<img :src="zhuanji.img" />
				<p class="zhuanji-title">{{zhuanji.title}}</p>
				<div class="zhuanji-foot">
					<p>
						<span>{{zhuanji.img_count}}张图片</span> .
						<span>{{zhuanji.collect_count}}人收藏</span>
					</p>
					<p>{{zhuanji.username}}</p>
				</div>
			</div>
			<!--单品推荐-->
			<div class="zhuanji" v-for="every in everys" v-if="two">
				<img :src="every.img" class="every-img"/>
				<p class="zhuanji-title">{{every.title}}</p>
				<div class="every-foot">
					<span>{{every.see_count}}人在逛</span>
					<router-link tag="button" to="/buy">良品购</router-link>
				</div>
			</div>
			<!--达人推荐-->
			<!-- <div class="zhuanji" v-for="special in specials" v-if="three">
				<div class="spec-head">
					
					<img :src="background_image" />
					<img :src="special.avatar"/>
				</div>
				<div class="every-foot">
					<p class="zhuanji-title">{{special.username}}</p>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	import { zhuanji, every, special } from "../../service/getData"

	export default {
		data() {
			return {
				zhuanjis: [], //获取专辑数据
				everys: [],     //获取单品数据
				specials: []    //达人推荐
			}
		},
		async mounted() {
			//获取专辑推荐
			let res = await zhuanji()
			this.zhuanjis = [...res]
			//获取单品推荐
			let everys = await every()
			this.everys = [...everys]
			//获取达人推荐
			let specials = await special()
			this.specials = [...specials.data.object_list]
		},
		props: ['title', 'classify', 'btn', 'one', 'two', 'three']
	}
</script>

<style scoped lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	.block {
		width: 80%;
		margin: 0 auto;
		padding-bottom: 50px;
	}
	
	header {
		height: 87px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #666;
		.title {
			font-size: 18px;
			color: #444;
		}
		.btns {
			width: 80px;
			height: 28px;
			text-align: center;
			line-height: 28px;
			font-size: 13px;
			font-weight: 700;
			color: #fff;
			background-color: #22b4f6;
			border-radius: 2px;
			text-decoration: none;
			margin: 0px auto;
			border: none;
		}
	}
	
	.classify {
		color: #888;
		font-size: 12px;
		span {
			color: #444;
			display: inline-block;
			width: 48px;
			text-align: center;
			height: 12px;
			line-height: 12px;
			border-right: 1px solid #999;
			&:hover {
				text-decoration: underline;
			}
			&:last-child {
				border: none;
			}
		}
	}
	
	.footer {
		display: flex;
		justify-content: space-between;
	}
	
	.zhuanji-title {
		color: #444;
		height: 34px;
		padding-top: 12px;
		padding-left: 10px;
		padding-right: 10px;
		font-size: 13px;
		font-weight: 700;
		&:hover {
			text-decoration: underline;
		}
		
	}
	
	.zhuanji {
		background: #fff;
		width: 18%;
		/*height: 400px;*/
		box-shadow: 0 3px 3px #888;
		.spec-head{
			width: 400px;
			height: 400px;
			border: 1px solid red;
		}
	}
	
	.zhuanji-foot {
		font-size: 12px;
		color: #666;
		padding: 12px 10px;
	}
	.every-img {
		width: 100%;
		height: 221px;
		border-bottom: 1px solid #888;
	}
	.every-foot {
		display: flex;
		justify-content: space-between;
		height: 50px;
		align-items: center;
		span {
			margin-left: 10px;
			font-size: 12px;
			color: #888;
		}
		button {
			margin-right: 10px;

		    width: 56px;
		    height: 25px;
		    text-align: center;
		    line-height: 25px;
		    color: #fff;
		    background-color: #fb3;
		    border-radius: 2px;
		    border: none;
		}
	}
</style>