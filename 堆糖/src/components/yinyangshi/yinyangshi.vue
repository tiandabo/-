<template>
	<div class="yin">
		<fall class="fall" :datas="yinyangNews"></fall>
	</div>
</template>

<script>
	import {
		showBack,
		animate,
		setStore,
		getStore
	} from '../../config/mUtils'
	import fall from '@/components/fall/fall'
	import {
		yinyang
	} from '../../service/getData'

	export default {
		data() {
			return {
				yinyangNews: [],

			}
		},
		components: {
			fall
		},
		async mounted() {
			let res = await yinyang();
			this.yinyangNews = [...res.object_list];
			setStore('id', JSON.stringify(this.yinyangNews))
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	/*大层*/
</style>