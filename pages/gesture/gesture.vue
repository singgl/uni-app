<template>
	<view>
		<view  class="uni-page-head">
			<view class="uni-page-head-title">手势图案</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<mpvue-gesture-lock :containerWidth="590" :cycleRadius="70" @end="onEnd" :password="password"></mpvue-gesture-lock>
			</view>
			<view class="uni-center">{{text}}</view>
		</view>
	</view>
</template>

<script>
	import mpvueGestureLock from '@/components/mpvueGestureLock/index.vue';
	import {
		mapMutations
	} from "vuex"
	export default {
		components: {
			mpvueGestureLock
		},
		data() {
			return {
				title: "手势图案",
				password: [],
				text: '请设定手势'
			}
		},
		onShow() {
			//#ifdef H5 
				document.title="手势图案"
			//#endif
		},
		methods: {
			...mapMutations(["setWord"]),
			onEnd(data) {
				console.log(data, this.password)
				if (this.password.length) {
					if (this.password.join('') === data.join('')) {
						this.setWord(data.join(''))
						this.text = '手势设定完成'
						this.password = []
						this.tips()
						setTimeout(function() {
							uni.navigateBack({delta:1})
						}, 1500);
					} else {
						this.text = '两次手势设定不一致'
						this.password = []
					}
				} else {
					this.text = '请确认手势设定'
					this.password = data
				}
			},
			tips() {
				uni.showToast({
					title:"设定成功"
				})
			}
		}
	}
</script>

<style scoped>
	.uni-page-head{
		padding: 34rpx;
		text-align: center;
	}
	.uni-page-head-title{
		display: inline-block;
		padding: 0 40rpx;
		font-size: 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #BEBEBE;
		box-sizing: border-box;
		border-bottom: 1rpx solid #D8D8D8;
	}
	.uni-center{
		text-align: center;
		margin-top: 30rpx;;
	}
</style>
