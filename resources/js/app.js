require('./bootstrap');
import VueHtmlToPaper from 'vue-html-to-paper';
window.Vue = require('vue').default;
Vue.use(VueHtmlToPaper);

Vue.component('router-view', require('./components/app.vue').default);
const app = new Vue({
    el: '#app',
});
