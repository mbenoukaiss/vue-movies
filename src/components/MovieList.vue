<template>
    <div>
        <sui-input id="search" v-model="search" placeholder="Search a title, a plot, a year..." fluid/>

        <sui-card-group :items-per-row="4">
            <movie-card v-for="movie in displayed_movies" :key="movie.id" :movie="movie" v-on:remove="remove(movie)"></movie-card>
        </sui-card-group>
    </div>
</template>

<script>
    import MovieCard from "./MovieCard.vue";

    export default {
        name: 'MovieList',
        data: () => {
            return {
                movies: window.movies,
                displayed_movies: [],
                search: null
            };
        },
        methods: {
            remove(movie) {
                this.movies.splice(this.movies.indexOf(movie), 1);

                this.refresh();
                this.save();
            },
            refresh() {
                if (this.search) {
                    let search = this.search.trim().toLowerCase();

                    this.displayed_movies = this.movies.filter(m => m.title.toLowerCase().includes(search) ||
                        m.genre.toLowerCase().includes(search) ||
                        m.year.toString().includes(search) ||
                        m.rate.toString().includes(search) ||
                        m.creator.toLowerCase().includes(search) ||
                        m.plot.toLowerCase().includes(search));
                } else {
                    this.displayed_movies = this.movies;
                }
            }
        },
        watch: {
            search() {
                this.refresh();
            }
        },
        created() {
            this.displayed_movies = this.movies;
        },
        components: {
            MovieCard
        }
    }
</script>

<style>
    #search {
        margin-bottom: 20px;
    }
</style>
