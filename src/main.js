import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
// import * as ElementUI from "./components/ ./components/element/element";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//全局监听滚动条高度
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
  // 或
  // window.scroll(0, 0);
});

//国际化语言包
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 初始化VueI18n
const i18n = new VueI18n({
  // 引入语言包
  messages: {
    'zh-CN': require('./i18n/zh.ts'), // 中国语
    'us-US': require('./i18n/us.ts'), // 英语
    'jp-JP': require('./i18n/jp.ts'), // 日语
  },
  // silentTranslationWarn: true
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  // locale: localStorage.getItem('lang') || 'vn-VN',
})

//动画
import 'animate.css'


//在main.js引入
// import Web3 from 'web3'
// Vue.prototype.Web3 = Web3

//Vue.use();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: function (h) { return h(App) }
}).$mount('#app')
