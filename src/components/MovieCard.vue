<template>
    <sui-card>
        <img v-if="movie.poster" :src="movie.poster"/>
        <img v-else :src="no_picture"/>

        <sui-card-content class="filler">
            <sui-card-header>{{ movie.title }}</sui-card-header>
            <sui-card-meta v-if="movie.year">{{ movie.year }}</sui-card-meta>
            <sui-card-description v-if="movie.plot">{{ movie.plot }}</sui-card-description>
        </sui-card-content>

        <sui-card-content>
            <sui-button @click="$router.push({ name: 'movie_edit', params: { id: movie.id }})" icon="edit"></sui-button>
            <sui-button v-on:click="remove" icon="trash"></sui-button>
            <sui-button @click="$router.push({ name: 'movie_show', params: { id: movie.id }})" primary icon="eye"
                        content="View" label-position="left"></sui-button>
        </sui-card-content>
    </sui-card>
</template>

<script>
    import no_picture from "../assets/no_picture.jpg";

    export default {
        name: 'MovieCard',
        data: () => {
            return {
                no_picture
            }
        },
        props: {
            movie: Object
        },
        methods: {
            remove() {
                this.$emit("remove", this.$props.movie);
            },
        },
    }
</script>

<style>
    img {
        object-fit: cover;
        width: 100%;
        height: 350px;
    }

    .filler {
        height: 100% !important;
    }
</style>
