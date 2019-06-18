<style scoped lang="scss">
	.step{
		width: 100%;
        height: auto;
        padding: 10upx 30upx;
        box-sizing: border-box;
        overflow: hidden;
        background-color: #fff;
        color: #666;
        margin-bottom: 20upx;
        .modle {
            width: 100%;
            height: 100upx;
            margin-top: 10upx;
            .mol {
                width: 100%;
                height: 52upx;
                position: relative;
                .mol-line {
                    width: 100%;
                    height: 4upx;
                    background-color: #e6e6e6;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .mol-ites {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    .ite {
                        width: 52upx;
                        height: 52upx;
                        border-radius: 50%;
                        border: 1upx solid #f5f5f5;
                        background-color: #fff;
                        box-sizing: border-box;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 2;
                        .n {
                            width: 44upx;
                            height: 44upx;
                            line-height: 44upx;
                            text-align: center;
                            border-radius: 50%;
                            background-color: #f5f5f5;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            font-size: 22upx;
                        }
                    }
                    .ite::after {
                        content: "";
                        width: 80upx;
                        height: 4upx;
                        background-color: transparent;
                        position: absolute;
                        left: 52upx;
                        top: 50%;
                        margin-top: -2upx;
                        z-index: 2;
                    }
                    .ite:last-of-type::after {
                        width: 0;
                    }
                    .ite:nth-of-type(2) {
                        left: 107upx;
                    }
                    .ite:nth-of-type(3) {
                        left: 214upx;
                    }
                    .ite:nth-of-type(4) {
                        left: 321upx;
                    }
                    .ite:nth-of-type(5) {
                        left: 428upx;
                    }
                    .ite:nth-of-type(6) {
                        left: 535upx;
                    }
                    .ite:nth-of-type(7) {
                        left: 642upx;
                    }
                    .hover {
                        border-color: rgb(97, 165, 238);
                        .n {
                            background-color: rgb(97, 165, 238);
                            color: #fff;
                        }
                    }
                    .hover::after {
                        background-color: rgb(97, 165, 238);
                    }
                }
            }
            .moday {
                width: 100%;
                height: 40upx;
                overflow: hidden;
                position: relative;
                margin-top: 16upx;
                .dd {
                    width: 52upx;
                    height: 40upx;
                    line-height: 1;
                    text-align: center;
                    font-size: 22upx;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
                .dd:nth-of-type(2) {
                    left: 107upx;
                }
                .dd:nth-of-type(3) {
                    left: 214upx;
                }
                .dd:nth-of-type(4) {
                    left: 321upx;
                }
                .dd:nth-of-type(5) {
                    left: 428upx;
                }
                .dd:nth-of-type(6) {
                    left: 535upx;
                }
                .dd:nth-of-type(7) {
                    left: 642upx;
                }
            }
        }
	}
</style>

<template>
	<view class='step'>
		<view class='modle'>
			<view class='mol'>
				<view class='mol-line'></view>
				<view class='mol-ites'>
					<view class="ite" :class="signNum >= min ? 'hover':''" :data-n='min'>
						<label class='n'>+{{min < 7 ? 1 : 3}}</label>
					</view>
					<view class="ite" :class="signNum >= min+1 ? 'hover':''" :data-n='min+1'>
						<label class='n'>+{{min+1 < 7?1:3}}</label>
					</view>
					<view class="ite" :class="signNum >= min+2 ? 'hover':''" :data-n='min+2'>
						<label class='n'>+{{min+2 < 7 ? 1:3}}</label>
					</view>
					<view class="ite" :class="signNum >= min+3 ? 'hover':''" :data-n='min+3'>
						<label class='n'>+{{min+3 < 7 ?1:3}}</label>
					</view>
					<view class="ite" :class="signNum >= min+4 ? 'hover':''" :data-n='min+4'>
						<label class='n'>+{{min+4 < 7 ? 1:3}}</label>
					</view>
					<view class="ite" :class="signNum >= min+5 ? 'hover':''" :data-n='min+5'>
						<label class='n'>+{{min+5 < 7 ? 1:3}}</label>
					</view>
					<view class="ite" :class="signNum >= min+6 ? 'hover':''" :data-n='max'>
						<label class='n'>+{{min+6 < 7 ? 1:3}}</label>
					</view>
				</view>
			</view>
			<view class='moday'>
				<label class='dd'>{{min}}天</label>
				<label class='dd'>{{min+1}}天</label>
				<label class='dd'>{{min+2}}天</label>
				<label class='dd'>{{min+3}}天</label>
				<label class='dd'>{{min+4}}天</label>
				<label class='dd'>{{min+5}}天</label>
				<label class='dd'>{{max}}天</label>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				min: 1,           //默认值日期第一天1
				max: 7,           //默认值日期最后一天7
				be: 0,            //默认倍数
			}
		},
		props:{
			signNum:Number
		},
		onShow() {
			console.log(this.signNum)
		}
	}
</script>


