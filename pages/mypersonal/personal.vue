<style scoped lang="scss">
	.main{
		.portrait{
			display: flex;
			height: 160rpx;
			align-items: center;
			align-content: center;
			/* justify-content: center;  水平居中*/
			font-size: 30rpx;
			color: #fff;
			background-color: #49A3EE;
			.userinfo-avatar{
				border-radius: 50%;
				width: 100rpx;
				height: 100rpx;
				margin: 30rpx;
			}
			.sign{
				width: 120rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				background-color: #fff;
				color:  #49A3EE;
				border-radius: 10rpx;
				margin: 40rpx;
				margin-left: auto;  /*子元素靠右 */
			}
			.signs{
				background: #fff;
				color: #666;
			}
		}
		.userlist{
			margin-top: 40rpx;
			.iconfont{
				margin-right: 10rpx;
			}
			button{
				flex: 1;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
	}
</style>

<template>
	<view class="main">
		<view class='portrait'>
			<image class="userinfo-avatar" :src="userInfo.avatarUrl ? userInfo.avatarUrl : '/static/icon.png'" mode="aspectFit"></image>
			<view>{{userInfo.nickName}}</view>
			<view class='sign' :class='signState ? "signs" : ""' @tap='signClick'>{{signState?"已签到":"签到"}}</view>
		</view>
		
		<view class='userlist cu-list menu'>  
			<block v-for="(item, index) in list" :key="index">
				<view class='cu-item arrow' @tap="bind(item.batName)">
					<view class="content">
						<text class='iconfont' :class="item.className"></text>
						<text>{{item.name}}</text>
					</view>
					<!--  #ifdef  MP-WEIXIN -->
					<button open-type="contact" v-if="item.batName === 'bindService'"/>
					<button open-type="feedback" v-if="item.batName === 'feedback'"/>
					<!--  #endif -->
				</view>
			</block>
		</view>
	</view>
</template>

<script >
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		data() {
			return {
				list:[
					{
						name: '设置',
						className: 'icon-shezhi',
						batName:"bindSeting"
					},
					{
						name: '问题反馈',
						className: 'icon-tishi',
						batName: "feedback"
					},
					{
						name: '剪切板',
						className: 'icon-document',
						batName: "bindCopy"
					},
					{
						name: '在线客服',
						className: 'icon-xiaoxizhongxin',
						batName: "bindService"
					}
				]
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.global.userInfo,
				signState: state => state.global.signState,
				sing: state => state.global.sing
			})
		},
		onShow() {
			console.log(this.sing)
		},
		methods: {
			...mapMutations(["setState", "setSing"]),
			bind(signClick) {
				switch (signClick){
					case "bindSeting":
						this.bindSeting()
						break;
					case "bindCopy":
						this.bindCopy()
						break;
					default:
						break;
				}
			},
			bindSeting() {
				uni.navigateTo({
					url:"/pages/setting/setting"
				})
			},
			bindCopy() {
				let data = "haha"
				//#ifdef H5
					uni.showToast({
						title: '暂不支持H5端',
						duration: 2000,
						icon:"none"
					})
				//#endif
				//#ifndef H5
				uni.setClipboardData({
					data: data,
					success: res => {
						uni.showToast({
							title: '复制成功',
							duration: 2000
						})
						uni.getClipboardData({
							success: res=> {
								console.log(res.data)
							}
						})
					}
				})
				//#endif
			},
			signClick() {
				if(this.signState) {
					return
				}else{
					this.setState(true)
					console.log(++this.sing)
					this.setSing(++this.sing)
				}
			},
		}
	}
</script>