<template>
	<div class="shop">
		<Hea></Hea>
		<div class="content">
			<ul class="ul">
			<router-link to="content" tag="li">内容</router-link>
			<router-link to="shop" tag="li">
				<el-badge value="new" class="item">
					商品
				</el-badge>
			</router-link>
			<router-link to="zhuan" tag="li">专辑</router-link>
			<router-link to="peo" tag="li">糖人</router-link>
		</ul>

		<div class="sh-sp">
			<form>
				<input type="text" v-model="search"> <button>找一找</button>
			</form>
			<div class="hotsearch">
				热门搜索：
				<router-link to="">新加坡购物</router-link>
				<router-link to="">Q版头像定制</router-link>
				<router-link to="">月饼</router-link>
				<router-link to="">简笔画</router-link>
				<router-link to="">折纸</router-link>
				<router-link to="">初秋装扮</router-link>
				<router-link to="">中秋节</router-link>
				<router-link to="">观影手帐</router-link>
				<router-link to="">手机摄影</router-link>
				<router-link to="">枫叶色眼影</router-link>
				<router-link to="">美甲</router-link>
			</div>
		</div>
		</div>
		<router-view></router-view>
		<foots></foots>
	</div>
</template>
<script>

	import Hea from '@/components/Header/header'
	import foots from '@/components/childfoot/childfoot'
	export default {
		name: "shop",
		data() {
			return {
				id: [],
				search: ''
			}
		},
		async mounted() {
			this.search = this.$route.params.id
		},
		components: {
			Hea,
			foots
		}
	}
</script>
<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.content {
		width: 60%;
		margin: 0 auto;
	}
	.view {
		padding: 50px auto;
	}
	.shop {
		background: #fff;
		padding-top: 66px;
		.ul {
			position: relative;
			z-index: 2;
			zoom: 1;
			height: 29px;
			overflow: hidden;
			font-family: 宋体;
			margin-top: 50px;
			background: #fff;
			.router-link-active {
				width: 52px;
				color: #f14382;
				font-weight: 700;
				background-image: url(https://b-ssl.duitang.com/uploads/people/201506/29/20150629151241_tjkUi.png);
				background-repeat: no-repeat;
			}
			li {
				float: left;
				width: 52px;
				height: 100%;
				margin: 0;
				padding: 0 12px;
				line-height: 28px;
				font-size: 14px;
				width: 52px;
				text-align: center;
				color: #5678a0;
				list-style: none;
				vertical-align: middle;
			}
		}
		.sh-sp {
			margin: -1px 0 0;
			padding: 16px;
			margin-bottom: 36px;
			border: 1px solid #ebebeb;
			background-color: #f7f7f7;
			border-radius: 0 5px 5px;
			overflow: hidden;
			box-shadow: inset 0 1px 0 rgba(255, 255, 255, .09);
			-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .19);
			-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .09);
			form {
				input {
					width: 180px;
					height: 25px;
					line-height: 21px;
					padding: 3px 2px 0 4px;
					border-width: 1px;
					border-style: solid;
					border-color: #d4d4d4;
					font-size: 12px;
				}
				button {
					display: inline-block;
					width: 80px;
					height: 30px;
					margin-right: 8px;
					padding-left: 2px;
					overflow: hidden;
					border-radius: 2px;
					background-color: #22b4f6;
					border-radius: 2px;
					background-color: #22b4f6;
					border: 1px solid #22b4f6;
					color: white;
					border-radius: 3px;
					margin-left: 10px;
					padding-left: 2px;
					letter-spacing: 2px;
					font-size: 14px;
					line-height: 31px;
					font-family: '\5B8B\4F53';
					text-align: center;
					cursor: pointer;
					text-decoration: none!important;
					margin-right: 8px;
					padding-left: 2px;
				}
			}
			.hotsearch {
				width: 100%;
				margin: 6px 0 0 12px;
				background-color: #f7f7f7;
				border-radius: 0 5px 5px;
				font-size: 12px;
				a {
					display: inline-flex;
					color: #5678a0;
					text-decoration: none;
				}
			}
		}
	}
</style>