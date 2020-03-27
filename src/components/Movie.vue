<template>
    <sui-grid>
        <sui-grid-row>
            <sui-grid-column :width="12">
                <sui-table definition>
                    <sui-table-body>
                        <sui-table-row>
                            <sui-table-cell>Type</sui-table-cell>
                            <sui-table-cell>{{ movie.type }}</sui-table-cell>
                        </sui-table-row>
                        <sui-table-row v-if="movie.genre">
                            <sui-table-cell>Genre</sui-table-cell>
                            <sui-table-cell>{{ movie.genre }}</sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell>Title</sui-table-cell>
                            <sui-table-cell>{{ movie.title }}</sui-table-cell>
                        </sui-table-row>
                        <sui-table-row v-if="movie.year">
                            <sui-table-cell>Year</sui-table-cell>
                            <sui-table-cell>{{ movie.year }}</sui-table-cell>
                        </sui-table-row>
                        <sui-table-row v-if="movie.creator">
                            <sui-table-cell>Creator</sui-table-cell>
                            <sui-table-cell>{{ movie.creator }}</sui-table-cell>
                        </sui-table-row>
                        <sui-table-row v-if="movie.awards">
                            <sui-table-cell>Awards</sui-table-cell>
                            <sui-table-cell>{{ movie.awards }}</sui-table-cell>
                        </sui-table-row>
                        <sui-table-row>
                            <sui-table-cell>Ratings</sui-table-cell>
                            <sui-table-cell>
                                <sui-rating :rating="movie.rate" :max-rating="5" @rate="updateRate"/>
                                <sui-label v-if="movie.rate" pointing="left">{{ movie.rate }}/5</sui-label>
                            </sui-table-cell>
                        </sui-table-row>
                        <sui-table-row v-if="movie.plot">
                            <sui-table-cell>Synopsis</sui-table-cell>
                            <sui-table-cell>{{ movie.plot }}</sui-table-cell>
                        </sui-table-row>
                    </sui-table-body>
                </sui-table>
            </sui-grid-column>
            <sui-grid-column :width="4">
                <sui-card>
                    <sui-image v-if="movie.poster" :src="movie.poster"/>
                    <sui-image v-else :src="no_picture"/>
                </sui-card>
            </sui-grid-column>
        </sui-grid-row>
    </sui-grid>
</template>

<script>
    import no_picture from "../assets/no_picture.jpg";

    export default {
        name: 'MovieView',
        data: () => {
            return {
                no_picture
            }
        },
        created() {
            this.movie = window.movies[this.$route.params.id];
        },
        methods: {
            updateRate(evt, props) {
                this.movie.rate = props.rating;
            },
        },
    }
</script>
