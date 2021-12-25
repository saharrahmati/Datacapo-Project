import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { LMap, LTileLayer, LMarker , LPolyline,LIcon} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueMaterial)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker)
Vue.component('l-polyline',LPolyline)
Vue.component('l-icon',LIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
