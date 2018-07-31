import Vue from "vue";
import App from "./App.vue";
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*import {
    // Form, FormItem, Input, Col, Upload, Button, Popover,  Table, TableColumn,Tree, Pagination, Dialog,Loading
    Carousel, CarouselItem,
    // Submenu,Menu, MenuItem, MenuItemGroup,
} from 'element-ui'
const needComponents = [
    // Form, FormItem, Input, Col, Upload, Button, Popover,  Table, TableColumn,, TreePagination, Dialog,
    CarouselItem,Carousel
    // Submenu,Menu, MenuItem, MenuItemGroup
]
needComponents.forEach(item => {
    Vue.component(item.name, item)
})*/
window.appname='dist'
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http=axios
new Vue({
    router,
  render: h => h(App)
}).$mount("#app");
