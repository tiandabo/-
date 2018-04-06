<template>
	<div class="search-content">
		<div v-if="datas">
			<falls :datas="datas"></falls>
		</div>
		
		<div class="bottom" v-else>
			抱歉，没有匹配到结果！
		</div>
	</div>
</template>

<script>
	import { everyOne, more, fall, buyNews, addbuy, userid, yinyang } from '../../../service/getData';
	import falls from '../../../components/fall/fall'
	export default {
		data() {
			return {
				search: "",
				all: [],
				datas: [],
			}
		},
		mounted() {
			this.search = this.$route.params.id;
			this.initData()
		},
		methods: {
			initData() {
				Promise.all([everyOne(), more(), fall(), buyNews(), addbuy(), yinyang()])
					.then(res => {
						let one = res[0].data.object_list;
						let two = res[1].object_list;
						let three = res[2].object_list;
						let four = res[3].object_list;
						let five = res[4].data.object_list;
						let six = res[5].data.object_list;
						this.all = [...this.all, ...one, ...two, ...three, ...four, ...five, ...six,]
						this.datas = this.all.filter(item => {
						return item.album.name.indexOf(this.search) > -1;
						})
					}).catch(err => {
						console.log(err)
					})

				//				console.log(this.datas)
			}
		},
		components: {
			falls
		}

	}
</script>

<style scoped="scoped">
	.search-content {
		padding: 50px auto;
	}
	.bottom {
		text-align: center;
		height: 700px;
		line-height: 700px;
	}
</style>