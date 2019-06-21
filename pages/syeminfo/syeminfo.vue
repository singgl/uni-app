<style lang="scss" scoped>
	.systeminfo {
		padding: 0 30rpx 0 30rpx;
		background: #fff;
		margin-bottom: 20rpx;
		.item {
			display: flex;
			height: 80rpx;
			line-height: 80rpx;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			font-size: 30rpx;
			color: #000;
			border-top: 1rpx solid #efefef;
			.value {
				align-self:flex-end;
				font-size: 24rpx;
				color: #777;
			}
		}
		.item:last-child {
			border-bottom: none;
		}
	}
</style>

<template>
	<view class='systeminfo'>
		<view class='item' v-for='(item, index) in systeminfoArr' :key='index'>
			<view class='key'>{{item.name}}</view>
			<view class='value'>{{systeminfo[item.key]}}</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				systeminfoObj: {},
				systeminfoArr: [
				  {
				    key: 'brand',
				    name: '手机品牌',
				  },
				  {
				    key: 'model',
				    name: '手机型号',
				  },
				  {
				    key: 'pixelRatio',
				    name: '设备像素比',
				  },
				  {
				    key: 'screenWidth',
				    name: '屏幕宽度',
				  },
				  {
				    key: 'screenHeight',
				    name: '屏幕高度',
				  },
				  {
				    key: 'windowWidth',
				    name: '可使用窗口宽度',
				  },
				  {
				    key: 'windowHeight',
				    name: '可使用窗口高度',
				  },
				  {
				    key: 'statusBarHeight',
				    name: '状态栏高度',
				  },
				  {
				    key: 'language',
				    name: '微信设置的语言',
				  },
				  {
				    key: 'version',
				    name: '微信版本号',
				  },
				  {
				    key: 'system',
				    name: '操作系统版本',
				  },
				  {
				    key: 'platform',
				    name: '客户端平台',
				  },
				  {
				    key: 'fontSizeSetting',
				    name: '用户字体大小设置(px)',
				  },
				  {
				    key: 'SDKVersion',
				    name: '客户端基础库版本',
				  }
				]
			};
		},
		computed: {
			...mapState({
				systeminfo: state => state.global.systeminfo
			})
		},
		onShow () {
			console.log(this.systeminfo)
		},
	}
</script>


