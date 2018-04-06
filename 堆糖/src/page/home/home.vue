<template>
	<div class="home">
		<headers home="true"></headers>
		<swipers :images="swipers"></swipers>
		<block title="专辑精选" btn="往期回顾>" one="true"></block>
		<block title="单品推荐" :classify="classify" two="true"></block>
		<block title="达人推荐" btn="更多达人>" three="true"></block>
		<div class="fall">
			<block title="大家都在逛"></block>
			<fall :datas="datas"></fall>
			<p><router-link tag="button" to="/more">浏览更多></router-link></p>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import { everyOne, swiper } from '../../service/getData'
	import fall from '@/components/fall/fall'
	import headers from '@/components/Header/header'
	import swipers from '@/components/Swiper/swipers'
	import footers from '@/components/Footer/footers'
	import block from '@/components/Block/block'
	import { mapState, mapmutations } from 'vuex'
	export default {
		name: 'app',
		data() {
			return {
				datas: [],
				swipers: [],
				classify: [
					{
						classUrl: '全部'
					},
					{
						classUrl: '上衣'
					},
					{
						classUrl: '裙裤'
					},
					{
						classUrl: '配饰'
					},
					{
						classUrl: '鞋子'
					},
					{
						classUrl: '包袋'
					},
					{
						classUrl: '日杂'
					}
				],
				scroll: null
			}
		},
		
		computed: mapState([
		  'altTip'
		]),
		
		async mounted() {
			let res = await everyOne()
			this.datas = [...res.data.object_list]
			let swipers = await swiper()
			this.swipers = [...swipers]
		},
		components: {
			fall,
			headers,
			swipers,
			block,
			footers
		}

	}
</script>

<style lang="scss" scoped>
	.home {
		padding-top: 65px;
	}
	
	.fall {
		padding-bottom: 50px;
		p {
			text-align: center;
			margin: 50px 0;
			button {
			    width: 120px;
			    height: 40px;
			    text-align: center;
			    line-height: 40px;
			    font-size: 15px;
			    font-weight: 700;
			    color: #fff;
			    background-color: #22b4f6;
			    border-radius: 2px;
			    text-decoration: none;
			    border: none;
			}
		}
	}
</style>