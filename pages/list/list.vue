<template>
	<indexed-list :options="list" :showSelect="false" @click="bindClick" />
</template>

<script>
	import {
		mapMutations
	} from "vuex"
	import airport from '@/common/utils/airport.js'
	import IndexedList from '@/components/indexed-list/indexed-list.vue'

	export default {
		components: {
			IndexedList
		},
		data() {
			return {
				list: airport.list
			}
		},
		methods: {
			...mapMutations(["setCity"]),
			bindClick(e) {
				console.log('点击item，返回数据' + e.item.name + JSON.stringify(e))
				this.setCity(e.item.name)
				setTimeout(function() {
					uni.navigateBack({
						delta: 1
					})
				}, 500);
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}
</style>