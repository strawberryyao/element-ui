// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'


Vue.use(ElementUI);
//Vue.use(VueI18n);
Vue.config.productionTip = false;

/* const i18n = new VueI18n({
  locale: 'en',    // 语言标识
  messages: {
      'zh': require('./common/lang/zh'),
      'en': require('./common/lang/en')
  }
}) */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
 // i18n,
  components: { App },
  template: '<App/>'
})
