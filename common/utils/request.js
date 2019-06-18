// get方法
const Get =  function(url, msg) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			success: (res) => {
				resolve({result: res.data})
			},
			fail: (e) => {
				reject(e)
			}
		})
	})
}
// post方法
const Post = function(url, data, msg) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			data: data,
			success: (res) => {
				resolve({result: res.data})
			},
			fail: (e) => {
				reject(e)
			}
		})
	})
}

export default {
	Get,
	Post
}