<style lang="scss" scoped>
	.setting {
		font-size: 28rpx;
		color: #666;
		.s{
			.t {
				overflow: hidden;
				padding: 0 40rpx;
				background: #fff;
				margin-bottom: 20rpx;
				.title {
					font-size: 32rpx;
					color: #40a7e7;
					margin: 26rpx 0;
				}
				.content{
					padding-left: 20rpx;
					.subtitle {
						font-size: 28rpx;
						color: #40a7e7;
					}
					.item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 100rpx;
						.tip {
							font-size: 22rpx;
							color: #999;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							&image {
								width: 24rpx;
								height: 24rpx;
								margin-right: 10rpx;
							}
						}
					}
				}
			}
		}
		.toast{
			.mask {
				position: fixed;
				z-index: 9;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
				background: rgba(0, 0, 0, .5);
			}
			.wrapper {
				position: fixed;
				z-index: 10;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				margin: auto;
				background: #fff;
				font-size: 24rpx;
				color: #333;
				width: 60%;
				height: 400rpx;
				border-radius: 14rpx;
				.box {
					height: 400rpx;
					padding: 20rpx 28rpx;
					overflow: scroll;
					.t {
						font-size: 28rpx;
						color: #40a7e7;
						margin: 20rpx 0;
						padding: 0;
					}
					.content {
						line-height: 1.8em;
						text-align: justify;
						&text {
							display: block;
							margin-bottom: 10rpx;
						}
					}
				}
			}
		}
	}
	.item .tip image {
		width: 24rpx;
		height: 24rpx;
		margin-right: 10rpx;
	}
	.more {
		width: 32rpx;
		height: 32rpx;
	}
	
</style>

<template>
	<view class='setting'>
	<!-- 自定义 -->
		<view class='s'>
			<!-- 检查更新 -->
			<!--  #ifdef  MP-WEIXIN -->
			<view class='t'>
				<view class='title'>
					<view>检查更新</view>
				</view>
				<view class='content'>
					<view class='item'>
						<view>
							<view>更新提醒</view>
							<view class='tip' @tap="updateInstruc">
								<image src='/static/question.png'></image>
								<text v-if='enableUpdate'>在首页检测到新版本，会提示更新</text>
								<text v-if='!enableUpdate'>基础库版本需高于 1.9.90，当前基础库版本为 {{SDKVersion}}</text>
							</view>
						</view>
						<switch color='#40a7e7' :checked='setting.forceUpdate' @change='switchChange' data-switchParam='forceUpdate'></switch>
					</view>
				</view>
			</view>
			<!-- #endif -->
			<!-- 小工具 -->
			<view class='t'>
				<view class='title'>小工具</view>
				<view class='content'>
					<view class='subtitle'>NFC</view>
					<view class='item' @tap='getHCEState'>
						<view>检测是否支持NFC</view>
						<image class='more' src='/static/arrow.png'></image>
					</view>
				</view>
				<!--  #ifndef  H5 -->
				<view class='content'>
					<view class='subtitle'>屏幕亮度</view>
					<view class='item'>
						<view>
							<view>当前屏幕亮度</view>
							<view class='tip'>范围0~100，0 最暗，100 最亮</view>
						</view>
						<view>{{screenBrightness}}</view>
					</view>
					<view class='item' @tap='setScreenBrightness'>
						<view :style="{width:100+'%'}">
							<view>设置屏幕亮度</view>
							<slider :value='screenBrightness' min='0' max='100' step='1' block-size='12' block-color='#40a7e7' activeColor='#40a7e7' show-value='true' @change='screenBrightnessChanging' @changing='screenBrightnessChanging'></slider>
						</view>
					</view>
					<view class='item'>
						<view>
							<view>保持常亮</view>
							<view class='tip'>仅在当前小程序、当次生效，离开小程序后设置失效</view>
						</view>
						<switch color='#40a7e7' @change='switchChange' data-switchparam='keepscreenon' :checked='setting.keepscreenon'></switch>
					</view>
				</view>
				<!--  #endif -->
				<view class='content'>
					<view class='subtitle'>系统信息</view>
					<view class='item' @tap='getsysteminfo'>
						<view>查看系统信息</view>
						<image class='more' src='/static/arrow.png'></image>
					</view>
				</view>
				<view class='content'>
					<view class='subtitle'>是否开启手势解锁</view>
					<view class='item'>
						<view>开启后，每次都需解锁进入</view>
						<switch color='#40a7e7' :checked='setting.gesture' @change='switchChange' data-switchParam='gesture'></switch>
					</view>
				</view>
			</view>
			<!-- 清除数据 -->
			<view class='t'>
				<view class='title'>清除数据</view>
				<view class='content'>
					<view class='item' @tap='removeStorage' data-type='setting'>
						<view>
							<view>恢复初始化设置</view>
							<view class='tip'>
								<image src='/static/danger.png'></image>
								<text>所有设置信息都将被清除</text>
							</view>
						</view>
						<image class='more' src='/static/arrow.png'></image>
					</view>
					<view class='item'  @tap='removeStorage' data-type='all'>
						<view>
							<view>清除所有本地数据</view>
							<view class='tip'>
								<image src='/static/danger.png'></image>
								<text>所有本地数据都将被清除</text>
							</view>
						</view>
						<image class='more' src='/static/arrow.png'></image>
					</view>
				</view>
			</view>
		</view>
		
		<!-- toast -->
		<view class='toast' v-if='show'>
			<view class='mask' @tap='hide'></view>
			<view class='wrapper'>
				<view class='box'>
					<view class='t'>兼容性</view>
					<view class='content'>由于小程序基础库从 1.9.90 开始支持 wx.getUpdateManager API，故基础库低于该版本的会忽略该设置。</view>
					<view class='t'>启动机制</view>
					<view class='content'>小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」。 假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台的小程序切换到前台，这个过程就是热启动；冷启动指的是用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动。</view>
					<view class='t'>更新机制</view>
					<view class='content'>小程序冷启动时如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。</view>
					<view class='t'>运行机制</view>
					<view class='content'>
						<text>1、小程序没有重启的概念；</text>
						<text>2、当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后（目前是5分钟）会被微信主动销毁；</text>
						<text>3、当短时间内（5s）连续收到两次以上系统内存告警，会进行小程序的销毁。</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				show: false,
				screenBrightness: '获取中',
				keepscreenon: false,
				SDKVersion: '',
				enableUpdate: true
			}
		},
		computed: {
			...mapState({
				setting: state => state.global.setting
			})
		},
		watch:{
			setting: {
				handler: function(old, newold){
					console.log(old, newold,"监听")
				},    
				deep: true
			}
		},
		onLoad() {
			//#ifndef H5
				this.getScreenBrightness()
			//#endif
		},
		onShow() {
			console.log(this.setting,"---------")
		},
		mounted() {
			
		},
		methods:{ 
			...mapMutations(["setTing"]),
			updateInstruc() {
				this.show = true
			},
			getsysteminfo() {
				uni.navigateTo({
					url:"/pages/syeminfo/syeminfo"
				})
			},
			switchChange(e) {
				console.log(e)
				let dataset = e.currentTarget.dataset
				let switchparam = dataset.switchparam
				let setting = this.setting
				if (switchparam === 'forceUpdate') {
					if (this.enableUpdate) {
						setting[switchparam] = (e.detail || {}).value
					} else {
						setting[switchparam] = false
						uni.showToast({
							title: '基础库版本较低，无法使用该功能',
							icon: 'none',
							duration: 2000,
						})
					}
				} else if (switchparam === 'keepscreenon') {
					setting[switchparam] = (e.detail || {}).value
					// #ifndef H5
					this.setKeepScreenOn()
					// #endif
				} else {
					setting[switchparam] = (e.detail || {}).value
					if(e.detail.value) {
						setTimeout(function() {
							uni.navigateTo({
								url:"/pages/gesture/gesture"
							})
						}, 500);
					}
				}
				this.setTing(setting)
			},
			screenBrightnessChanging(e) {
				console.log(e.detail.value)
				//#ifndef H5
					this.setScreenBrightness(e.detail.value)
					this.screenBrightness = e.detail.value
				//#endif
			},
			setScreenBrightness (val) {
				uni.setScreenBrightness({
				    value: val / 100,
				    success: function () {
				        console.log('success')
				    }
				})
			},
			getScreenBrightness() {
				uni.getScreenBrightness({
					success: (res) => {
						this.screenBrightness = Number(res.value * 100).toFixed(0)
					},
					fail: (res) => {
						this.screenBrightness = '获取失败'
					}
				})
			},
			getHCEState () {
				//#ifdef MP-WEIXIN || APP-PLUS
				uni.showLoading({title: '检测中...'})
				uni.getHCEState({
					success: function (res) {
						uni.hideLoading()
						uni.showModal({
							title: '检测结果',
							content: '该设备支持NFC功能',
							showCancel: false,
							confirmText: '朕知道了',
							confirmColor: '#40a7e7',
						})
					},
					fail: function (res) {
						wx.hideLoading()
						wx.showModal({
							title: '检测结果',
							content: '该设备不支持NFC功能',
							showCancel: false,
							confirmText: '朕知道了',
							confirmColor: '#40a7e7',
						})
					}
				})
				//#endif
				//#ifndef APP-PLUS || MP-WEIXIN
				uni.showToast({
					title:"仅支持App及小程序",
					icon:"none"
				})
				//#endif
			},
			removeStorage(e) {
				let type = e.currentTarget.dataset.type
				this.clear(type)
			},
			clear(type) {
				switch (type){
					case "setting":
						this.setClear()
						break;
					case "all":
						this.locclear()
						break;
				}
			},
			setClear() {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确认要初始化设置',
					cancelText: '容朕想想',
					confirmColor: '#40a7e7',
					success: (res) => {
						if (res.confirm) {
							uni.removeStorageSync("word")
							Object.keys(that.setting).forEach(function(key){
								that.setting[key] = false
								console.log(that.setting);
							});
							uni.showToast({
								title: '初始化成功', icon:"none"
							})
							
						}
					}
				})
			},
			locclear() {
				uni.showModal({
					title: '提示',
					content: '确认要删除',
					cancelText: '容朕想想',
					confirmColor: '#40a7e7',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorage({
								success: (res) => {
									uni.showToast({
										title: '数据已清除', icon:"none"
									})
								}
							})
							//返回首页
							
						}
					}
				})
			},
			hide() {
				this.show = false
			},
			ifDisableUpdate () {
				let systeminfo = getApp().globalData.systeminfo
				let SDKVersion = systeminfo.SDKVersion
				let version = cmpVersion(SDKVersion, '1.9.90')
				if (version >=0) {
					this.setData({
						SDKVersion,
						enableUpdate: true,
					})
				} else {
					this.setData({
						SDKVersion,
						enableUpdate: false,
					})
				}
			},
			setKeepScreenOn() {
				uni.setKeepScreenOn({
					keepScreenOn: true
				})
			}
		}
	}
</script>


