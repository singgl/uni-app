<template>
	<view class='page'>
		<view class='bottom'>
		<!-- #ifdef MP-WEIXIN -->
			<button class='wxlogin' open-type='getUserInfo' @getuserinfo = "modalcancel">微信登录</button>
		<!-- #endif -->
			<button class='zhlogin' >账号登录</button>
		</view>
	</view>
</template>

<script>import {
		mapMutations
	} from "vuex"
	export default {
		data () {
			return {
				
			}
		},
		methods:{
			...mapMutations(["setUserinfo"]),
			// 账号登录 手机号授权
			modalconfirm: function (e) {
				console.log("111111111111", e)
			},
			// 微信登录
			modalcancel: function (e) {
				console.log(e)
				var that = this;
				if (e.detail.errMsg != 'getUserInfo:ok') {
					//用户拒绝
					console.log("拒绝授权", e);
				} else {
					console.log("用户允许微信授权", e);
					uni.showLoading({
						title:"加载中..."
					})
					// 这里可以发送code到后台换取秘钥
					this.setUserinfo(e.detail.userInfo)
					setTimeout(function() {
						uni.hideLoading()
						uni.reLaunch({
							url:"/pages/index/index"
						})
					}, 100);
				}		
			},
		}
	}
</script>

<style scoped>
	.page{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.bottom{
		box-sizing: border-box;
		position: absolute;
		bottom: 100rpx;
		width: 100%;
	}
	.bottom .wxlogin,
	.bottom .zhlogin{
		background: #1296db;
		font-size: 32rpx;
		color: #fff;
		width: 80%;
		margin: 30rpx auto;
	}
</style>
