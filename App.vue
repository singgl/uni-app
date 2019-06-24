<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex"
	export default {
		onLaunch: function() {
			console.log('App Launch')
			if(this.setting.forceUpdate) {
				this.Upload()
			}
		},
		onShow: function() {
			console.log('App Show', this.signState)
			uni.getSystemInfo({
				success: (res) => {
					this.setSysteminfo(res)
				}
			})
			
			this.isDay(this.signState.data).then((res) => {
				console.log(res,"-----9999999999------")
				if(res) {
					if(this.signState.status) {
						this.setState({})
					}else{
						this.setState({})
						this.setSing(0)
					}
				}else{
					if(this.signState.status) {
						return
					}else{
						this.setState({})
					}
				}
			})
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad() {
			console.log("卸载了")
			let set = this.setting
			set[keepscreenon] = false
			setTimeout(function() {
				this.setTing(set)
			}, 100);
		},
		computed: {
			...mapState({
				setting: state => state.global.setting,
				signState: state => state.global.signState,
			})
		},
		methods:{
			...mapMutations(["setTing", "setSysteminfo", "setState", "setSing"]),
			...mapActions(["isDay"]),
			// 更新
			Upload() {
				console.log("哈哈")
				const updateManager = uni.getUpdateManager();
				updateManager.onCheckForUpdate(function (res) {
					// 请求完新版本信息的回调
					console.log(res.hasUpdate,"-------888-------");
				});
				updateManager.onUpdateReady(function (res) {
					uni.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success(res) {
							if (res.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate();
							}
						}
					 });
				});
				updateManager.onUpdateFailed(function (res) {
					// 新的版本下载失败
					console.log(res)
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "common/main.css"; /* 你的项目css */
	@import "common/iconfont.css"
</style>
