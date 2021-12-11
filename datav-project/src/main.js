import Vue from "vue"
import datav from "@jiaminghi/data-view"
import App from "./App.vue"

import "./assets/common.less"
Vue.config.productionTip = false

Vue.use(datav)

new Vue({
  render: (h) => h(App),
}).$mount("#app")
