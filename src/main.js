import Vue from 'vue'
import App from './App.vue';

import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';

import routes from './routes';
import movies from './movies';

import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(SuiVue);

Vue.mixin({
    methods: {
        save: () => {
            localStorage.setItem("saved_movies", JSON.stringify(window.movies));
        }
    }
});

const router = new VueRouter({routes});

//set the page title to the one specified in route
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

//load movie list from local storage if it's available
window.movies = localStorage.getItem("saved_movies");

if(window.movies) {
    window.movies = JSON.parse(window.movies);
} else {
    window.movies = movies;
}

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
