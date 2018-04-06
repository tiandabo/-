<template>
	<div class="tuijian">
		<Hea></Hea>
		<fall :datas="mores" class="fall"></fall>
		<p v-if="tip" class="tip">加载中……</p>
		<p v-else class="tip">暂无数据</p>
		<Foot></Foot>

	</div>
</template>

<script>
	import Hea from '@/components/Header/header'
	import Foot from '@/components/Footer/footers'
	import fall from '@/components/fall/fall'
	import {
		more,
		addbuy
	} from '../../service/getData'
	import {
		setStore,
		loadMorePc
	} from '../../config/mUtils'

	export default {
		data() {
			return {
				mores: [], //百家新闻列表
				tip: true
			}
		},
		components: {
			Hea,
			Foot,
			fall
		},
		async mounted() {
			let res = await more();
			console.log(res.object_list)
			this.mores = [...res.object_list];
			let add = await addbuy();
			this.add = [...add.data.object_list];
			loadMorePc(document.getElementsByClassName("fall")[0], this.handleScroll);
			setStore('id', JSON.stringify(this.mores))
		},
		methods: {
			handleScroll() {
					let splice = this.add.splice(0, 10)
					if(!this.add[0]) {
						console.log(this.add)
						this.tip = false
						return
					}
					this.mores = [...this.mores, ...splice];

			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.tuijian {
		margin-top: 100px;
	}
	
	.tip {
		width: 100%;
		height: 50px;
		font-size: 20px;
		color: #22B4F6;
		font-weight: bolder;
		text-align: center;
	}
</style>