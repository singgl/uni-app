import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import store  from './store'
Vue.prototype.$store = store 

import api from "@/common/utils/request.js"
Vue.prototype.$api = api
import * as tos from "@/common/utils/tips.js"
Vue.prototype.$tos = tos

App.mpType = 'app'

const app = new Vue({
	store ,
    ...App
})
app.$mount()
