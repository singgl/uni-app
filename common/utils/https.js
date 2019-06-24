const weather = 'https://free-api.heweather.net/s6/weather'
const future = 'http://v.juhe.cn/weather/index'
const air = 'https://free-api.heweather.net/s6/air/now'
const locl = 'http://apis.juhe.cn/geo/'
const QQ_MAP_KEY1 = '630ac2e3d80941b48c80fe3a8ed1a042'
const QQ_MAP_KEY2 = 'c649beb3621c84ee57c365f45a9a6ed4'
const QQ_MAP_KEY3 = 'dd35eaa26348f268f1f02b4a8fbe4aaf'


//添加finally事件
Promise.prototype.finally = function (callback) {
    var Promise = this.constructor;
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value;
                }
            );
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason;
                }
            );
        }
    );
}

// 实况天气
function getWeather(location) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: weather+"/now",
			data: {
				location:location,
				key: QQ_MAP_KEY1
			},
			success: (res) => {
				resolve({result: res.data})
			},
			fail: (e) => {
				reject(e)
			},
			complete: (e) => {
		  	
			}
		})
	})
}
// 未来天气
function getFuture(location) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: weather+"/forecast",
			data: {
				location:location,
				key: QQ_MAP_KEY1
			},
			success: (res) => {
				resolve({result: res.data})
			},
			fail: (e) => {
				reject(e)
			},
			complete: (e) => {
		  	
			}
		})
	})
}
// 生活指数
function getLift(location) {
	return new Promise((resolve, reject) => {
	    uni.request({
	        url: weather+"/lifestyle",
	        data: {
	            location:location,
	            key: QQ_MAP_KEY1,
	        },
	        success: (res) => {
	            resolve({result:res.data})
	        },
	        fail: (e) => {
	            reject(e)
	        }
	    })
	})
}
// 空气质量---废弃
function getAir(location) {
	return new Promise((resolve, reject) => {
	    uni.request({
	        url: air,
	        data: {
	            location:location,
	            key: QQ_MAP_KEY1,
	        },
	        success: (res) => {
	            resolve({result:res.data})
	        },
	        fail: (e) => {
	            reject(e)
	        }
	    })
	})
}
// 經緯度逆解析
function gelocation(obj) {
	return new Promise((resolve, reject) => {
	    uni.request({
	        url: "/api/geo/",
	        data: {
	          key: QQ_MAP_KEY3,
	          lat:obj.lat,
	          lng:obj.lng,
	          type:1
	        },
	        success: (res) => {
	            resolve({result:res.data})
	        },
	        fail: (e) => {
	            reject(e)
	        }
	    })
	})
}

export {
	getWeather,
	getFuture,
	getLift,
	getAir,
	gelocation
}


// export const getWeather = (location) => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: 'https://free-api.heweather.net/s6/weather/now',
//       data: {
//         location:location,
//         key: QQ_MAP_KEY1
//       },
//       success: (res) => {
//         resolve({result: res.data})
//       },
//       fail: (e) => {
//         reject(e)
//       },
// 	  complete: (e) => {
// 	  	
// 	  }
//     })
//   })
// }
// 未来七天天气
// export const getFuture = (location) => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: 'http://v.juhe.cn/weather/index',
//       data: {
//         cityname:location,
//         key: QQ_MAP_KEY2
//       },
//       success: (res) => {
//         console.log(res)
//         resolve({result: res.data})
//       },
//       fail: (e) => {
//         console.log("haha  chucuo 2 ")
//         reject(e)
//       }
//     })
//   })
// }
// 生活指数
// export const getLift = (location) => {
//     return new Promise((resolve, reject) => {
//         wx.request({
//             url: 'https://free-api.heweather.net/s6/weather/lifestyle',
//             data: {
//                 location:location,
//                 key: QQ_MAP_KEY1,
//             },
//             success: (res) => {
//                 resolve({result:res.data})
//             },
//             fail: (e) => {
//                 reject(e)
//             }
//         })
//     })
// }
// 获取空气质量
// export const getAir = (location) => {
//   return new Promise((resolve, reject) => {
//       wx.request({
//           url: 'https://free-api.heweather.net/s6/air/now',
//           data: {
//               location:location,
//               key: QQ_MAP_KEY1,
//           },
//           success: (res) => {
//               resolve({result:res.data})
//           },
//           fail: (e) => {
//               reject(e)
//           }
//       })
//   })
// }
// 经纬度逆向解析
// export const gelocation = (obj) => {
//   return new Promise((resolve, reject) => {
//       wx.request({
//           url: 'http://apis.juhe.cn/geo/',
//           data: {
//             key: QQ_MAP_KEY3,
//             lat:obj.lat,
//             lng:obj.lng,
//             type:1
//           },
//           success: (res) => {
//               resolve({result:res.data})
//           },
//           fail: (e) => {
//               reject(e)
//           }
//       })
//   })
// }

