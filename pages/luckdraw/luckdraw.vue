<style lang="scss" scoped>
	.container {
		width: 100vw;
		.lucky-wheel {
			width: 100vw;
			height: 1200upx;
			background: rgb(252, 207, 133) url("../../static/color_pillar.png") no-repeat center bottom;
			background-size: 100%;
			padding-top: 60upx;
			.lucky-title {
				width: 100vw;
				height: 8.125rem;
				background: url("../../static/lucky_title.png") no-repeat center top;
				background-size: 100%;
			}
			.wheel-main {
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				.wheel-pointer-box {
					position: absolute;
					top: 50%;
					left: 50%;
					z-index: 100;
					transform: translate(-50%, -60%);
					width: 150upx;
					height: 150upx;
					.wheel-pointer {
						width: 150upx;
						height: 150upx;
						background: url("../../static/draw_btn.png") no-repeat center top;
						background-size: 100%;
						transform-origin: center 60%;
					}
				}
				.wheel-bg {
					width: 620upx;
					height: 620upx;
					background: url("../../static/draw_wheel.png") no-repeat center top;
					background-size: 100%;
					color: #fff;
					font-weight: 500;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-content: center;
					text-align: center;
					transition: transform 3s ease;
					.prize-list {
						width: 100%;
						height: 100%;
						position: relative;
						.prize-item {
							position: absolute;
							top: 0;
							left: 0;
							z-index: 2;
							width: 140upx;
							height: 300upx;
							&:first-child {
								top: 0;
								left: 288upx;
								transform: rotate(20deg);
							}
							&:nth-child(2) {
								top: 96upx;
								left: 400upx;
								transform: rotate(70deg);
							}
							&:nth-child(3) {
								top: 220upx;
								left: 392upx;
								transform: rotate(-250deg);
							}
							&:nth-child(4) {
								top: 9rem;
								left: 8.2125rem;
								transform: rotate(-210deg);
							}
							&:nth-child(5) {
								top: 9.2125rem;
								left: 4.4rem;
								transform: rotate(-160deg);
							}
							&:nth-child(6) {
								top: 6.3875rem;
								left: 1.9rem;
								transform: rotate(-111deg);
							}
							&:nth-child(7) {
								top: 2.8rem;
								left: 1.8125rem;
								transform: rotate(-69deg);
							}
							&:nth-child(8) {
								top: 0;
								left: 4.5rem;
								transform: rotate(-20deg);
							}
							.prize-pic {
								img {
									width: 140upx;
									height: 80upx;
									margin-top: 60upx;
								}
							}
							.prize-count {
								font-size: 30upx;
							}
							.prize-type {
								font-size: 24upx;
							}
						}
					}
				}
			}
		}
		.main {
			position: relative;
			width: 100%;
			min-height: 14.25rem;
			background: rgb(243, 109, 86);
			padding-bottom: 1.6875rem;
			.main-bg {
				width: 100%;
				height: 6.5625rem;
				position: absolute;
				top: -3.4375rem;
				left: 0;
				background: url("../../static/luck_bg.png") no-repeat center top;
				background-size: 100%;
			}
			.content {
				position: absolute;
				// top: 0.175rem;
				left: 0;
				background: rgb(243, 109, 86);
				width: 100%;
				height: 5.1875rem;
				font-size: 36upx;
				color: #ffeb39;
				// padding-left: 6.75rem;
				text-align: center;
			}
			.tip {
				position: relative;
				margin: 2.5rem auto 0;
				width: 17.5rem;
				border: 1px solid #fbc27f;
				.tip-title {
					position: absolute;
					top: -1rem;
					left: 50%;
					transform: translate(-50%, 0);
					font-size: 1rem;
					color: #fccc6e;
					background: rgb(243, 109, 86);
					padding: 0.3125rem 0.625rem;
				}
				.tip-content {
					padding: 1.5625rem 0.625rem;
					font-size: 0.875rem;
					color: #fff8c5;
					line-height: 1.5;
				}
			}
		}
		.toast {
			.toast-container {
				position: relative;
				width: 100%;
				height: 100%;
				border: 1px dotted #fccc6e;
				.toast-picture {
					position: absolute;
					top: -6.5rem;
					left: -1.5rem;
					width: 18.75rem;
					height: 8.5625rem;
				}
				.close {
					position: absolute;
					top: -0.9375rem;
					right: -0.9375rem;
					width: 2rem;
					height: 2rem;
					background: url("../../static/close_store.png") no-repeat center top;
					background-size: 100%;
				}
				.toast-title {
					padding: 2.8125rem 0;
					font-size: 18px;
					color: #fc7939;
					text-align: center;
				}
				.toast-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 0.9375rem;
					.toast-cancel{
						background-image: -moz-linear-gradient(-18deg,
						rgb(242, 148, 85) 0%,
						rgb(252, 124, 88) 51%,
						rgb(252, 124, 88) 99%);
						background-image: -ms-linear-gradient(-18deg,
						rgb(242, 148, 85) 0%,
						rgb(252, 124, 88) 51%,
						rgb(252, 124, 88) 99%);
						background-image: -webkit-linear-gradient( -18deg,
						rgb(242, 148, 85) 0%,
						rgb(252, 124, 88) 51%,
						rgb(252, 124, 88) 99%);
						box-shadow: 0px 4px 0px 0px rgba(174, 34, 5, 0.7);
						width: 4.6875rem;
						height: 1.875rem;
						border-radius: 1.875rem;
						text-align: center;
						line-height: 1.875rem;
						color: #fff;
					}
				}
			}
			
		}
		.toast-mask {
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.6);
			z-index: 10000;
			width: 100%;
			height: 100%;
		}
	}
</style>

<template>
	<view class="container">
        <view class="lucky-wheel">
            <view class="lucky-title"></view>
            <view class="wheel-main">
                <view class="wheel-pointer-box">
                     <view class="wheel-pointer" @click="rotate_handle()" :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"></view>
                </view>               
                <view class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">                   
                    <view class="prize-list">
                        <view class="prize-item" v-for="(item,index) in prize_list" :key="index">
                            <view class="prize-pic">
                                <img :src="item.icon">
                            </view>
                            <view class="prize-count" v-if="item.count">
                                {{item.count}}
                            </view>
                            <view class="prize-type">
                                {{item.name}}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="main">
            <view class="main-bg"></view>
            <view class="content">
                <view class="lottery_ticket">今日免费抽奖次数： {{ lottery_ticket}}</view>
            </view>
            <!-- <view class="tip">
                <view class="tip-title">活动规则</view>
                <view class="tip-content">
                    <p> 1.每日签到后，即可获得一次幸运大转盘的机会，仅限当天有效，过期作废。 2.金币抽奖，每10个金豆可兑换一次大转盘机会。</p>
                    <p> 2.金币抽奖，每10个金豆可以兑换一次大转盘抽奖机会</p>
                    <p> 3.所中金豆或积分到【我的账户】中查询。累计达到100金豆及以上，可以兑换相应奖品</p>
                </view>
            </view> -->
        </view>
        <view class="toast" v-show="toast_control">
            <view class="toast-container">
                <img :src="toast_pictrue" class="toast-picture">
                <view class="close" @click="close_toast()"></view>
                <view class="toast-title">
                    {{toast_title}}
                </view>
                <view class="toast-btn">
                    <view class="toast-cancel"  @click="close_toast">关闭</view>
                </view>
            </view>
        </view>
        <view class="toast-mask" v-show="toast_control"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				easejoy_bean: 0, //金豆
				lottery_ticket: 1, //抽奖次数
				prize_list: [
					{
					  icon: require("../../static/bean_500.png"), // 奖品图片
					  count: 10, // 奖品数量
					  name: "金豆", // 奖品名称
					  isPrize: 1 // 该奖项是否为奖品
					},
					{
					  icon: require("../../static/bean_five.png"),
					  count: 5,
					  name: "金豆",
					  isPrize: 1
					},
					{
					  icon: require("../../static/give_up.png"),
					  count: 0,
					  name: "谢谢参与",
					  isPrize: 0
					},
					{
					  icon: require("../../static/point_five.png"),
					  count: 5,
					  name: "积分",
					  isPrize: 1
					},
					{
					  icon: require("../../static/bean_500.png"),
					  count: 10,
					  name: "金豆",
					  isPrize: 1
					},
					{
					  icon: require("../../static/point_ten.png"),
					  count: 10,
					  name: "积分",
					  isPrize: 1
					},
					{
					  icon: require("../../static/bean_500.png"),
					  count: 10,
					  name: "金豆",
					  isPrize: 1
					},
					{
					  icon: require("../../static/give_up.png"),
					  count: 0,
					  name: "谢谢参与",
					  isPrize: 0
					}
				], //奖品列表
				toast_control: false, //抽奖结果弹出框控制器
				hasPrize: false, //是否中奖
				start_rotating_degree: 0, //初始旋转角度
				rotate_angle: 0, //将要旋转的角度
				start_rotating_degree_pointer: 0, //指针初始旋转角度
				rotate_angle_pointer: 0, //指针将要旋转的度数
				rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
				rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
				click_flag: true, //是否可以旋转抽奖
				index: 0 
			}
		},
		created() {
			this.init_prize_list();
		},
		computed: {
			toast_title() {
				return this.hasPrize ? "恭喜您，获得" +this.prize_list[this.index].count + ' ' + this.prize_list[this.index].name : "未中奖";
			},
			toast_pictrue() {
				return this.hasPrize ? require("../../static/congratulation.png") : require("../../static/sorry.png");
			}
		},
		methods: {
			//此方法为处理奖品数据
			init_prize_list(list) {},
			rotate_handle() {
				this.index = 1 //指定每次旋转到的奖品下标
				this.rotating();
			},
			rotating() {
				if (!this.click_flag) return;
				var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
				var during_time = 5; // 默认为1s
				var random = Math.floor(Math.random() * 7);
				var result_index = this.index ; // 最终要旋转到哪一块，对应prize_list的下标
				var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
				var rand_circle = 6; // 附加多转几圈，2-3
				this.click_flag = false; // 旋转结束前，不允许再次触发
				if (type == 0) {
					// 转动盘子
					var rotate_angle = this.start_rotating_degree + rand_circle * 360 + result_angle[result_index] - this.start_rotating_degree % 360;
					this.start_rotating_degree = rotate_angle;
					this.rotate_angle = "rotate(" + rotate_angle + "deg)";
					// 转动指针
					// this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
					// this.start_rotating_degree_pointer =360*rand_circle;
					var that = this;
					// 旋转结束后，允许再次触发
					setTimeout(function() {
						that.click_flag = true;
						that.game_over();
					}, during_time * 1000 + 1500); // 延时，保证转盘转完
				} else {
				//
				}
			},
			game_over() {
				this.toast_control = true;
				this.hasPrize = this.prize_list[this.index].isPrize
			},
			//关闭弹窗
			close_toast() {
				this.toast_control = false;
			}
		}
	}
</script>