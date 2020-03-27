import MovieList from './components/MovieList.vue'
import MovieForm from './components/MovieForm.vue';
import Movie from './components/Movie.vue';

const routes = [
    {name: 'movie_list', path: '/', meta: { title: 'Movie list' }, component: MovieList},
    {name: 'movie_add', path: '/movie/add', meta: { title: 'Add a movie' }, component: MovieForm},
    {name: 'movie_edit', path: '/movie/:id/edit', meta: { title: 'Edit movie' }, component: MovieForm},
    {name: 'movie_show', path: '/movie/:id', meta: { title: 'Movie' }, component: Movie},
];

export default routes;
