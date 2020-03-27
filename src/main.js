import Vue from 'vue'
import App from './App.vue';

import VueRouter from 'vue-router';
import SuiVue from 'semantic-ui-vue';

import routes from './routes';

import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(SuiVue);

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    window.console.log(to);
    next()
});

window.movies = [{
    id: 0,
    type: "TV show",
    poster: "https://fr.web.img4.acsta.net/pictures/17/11/10/12/18/2448823.jpg",
    title: "Dark",
    genre: "Drama, Sci-Fi, Crime, Thriller, Mystery ",
    year: 2017,
    creator: "Craig Mazin",
    awards: "1 win & 5 nominations",
    rate: 4.4,
    plot: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
}, {
    id: 1,
    type: "TV show",
    poster: "https://fr.web.img6.acsta.net/pictures/19/04/29/08/21/1692162.jpg",
    title: "Chernobyl",
    genre: "Drama, Thriller, History",
    year: 2019,
    creator: "Baran bo Odar, Jantje Friese",
    awards: "4 wins & 11 nominations",
    rate: 4.7,
    plot: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
}, {
    id: 2,
    type: "Movie",
    poster: "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
    title: "Interstellar",
    genre: "Drama, Thriller, History",
    year: 2019,
    creator: "Christopher Nolan",
    awards: "1 wins & 9 nominations",
    rate: 4.5,
    plot: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
}, {
    id: 3,
    type: "Movie",
    poster: null,
    title: "Unknown",
    genre: null,
    year: null,
    creator: null,
    awards: null,
    rate: null,
    plot: null,
}];

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
