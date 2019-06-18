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
			background-color: rgb(97, 165, 238);
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
				color:  rgb(97, 165, 238);
				border-radius: 10rpx;
				margin: 40rpx;
				margin-left: auto;  /*子元素靠右 */
			}
			.signs{
				background: #666;
				color: #fff;
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
			<view class='sign' :class='signState ? "signs" : ""' @tap='signState?"":"signClick"' :data-num="signNum" :data-min="min" :data-max="max" :data-be="be">{{signState?"已签到":"签到"}}</view>
		</view>
		<personal/>
		
		<view class='userlist cu-list menu'>
			<block v-for="(item, index) in list" :key="index">
				<view class='cu-item arrow' @tap="bind(item.batName)">
					<view class="content">
						<icon class='iconfont' :class="item.className"></icon>
						<text>{{item.name}}</text>
					</view>
					<button open-type="contact" v-if="item.batName === 'bindService'"/>
					<button open-type="feedback" v-if="item.batName === 'feedback'"/>
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
	import personal from "@/pages/components/personal/index.vue"
	export default {
		data() {
			return {
				signNum: 0,       //签到数
				min: 1,           //默认值日期第一天1
				max: 7,           //默认值日期最后一天7
				be: 0,
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
			})
		},
		onShow() {
			
		},
		methods: {
			bind(signClick) {
				console.log("haha",signClick)
			},
			bindSeting() {
				
			},
			bindCopy() {
				let data = "haha"
				wx.setClipboardData({
					data: data,
					success: res => {
						uni.getToast('复制成功')
						wx.getClipboardData({
							success: res=> {
								console.log(res.data)
							}
						})
					}
				})
			}
		}
	}
</script>