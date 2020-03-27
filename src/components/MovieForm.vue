<template>
    <sui-grid>
        <sui-grid-row>
            <sui-grid-column :width="12">
                <sui-form>
                    <sui-form-field>
                        <label>Type</label>
                        <sui-dropdown placeholder="Type..." selection :options="type_options" v-model="movie.type"/>
                    </sui-form-field>

                    <sui-form-field>
                        <label>Poster</label>
                        <input type="text" v-model="movie.poster" placeholder="URL of the poster"/>
                    </sui-form-field>

                    <sui-form-fields>
                        <sui-form-field width="ten">
                            <label>Title</label>
                            <input type="text" v-model="movie.title"/>
                        </sui-form-field>
                        <sui-form-field width="six">
                            <label>Genre</label>
                            <input type="text" v-model="movie.genre"/>
                        </sui-form-field>
                    </sui-form-fields>

                    <sui-form-fields>
                        <sui-form-field width="twelve">
                            <label>Year</label>
                            <input type="number" v-model="movie.year"/>
                        </sui-form-field>
                        <sui-form-field width="four">
                            <label>Creator</label>
                            <input type="text" v-model="movie.creator"/>
                        </sui-form-field>
                    </sui-form-fields>

                    <sui-form-field>
                        <label>Awards</label>
                        <input type="text" v-model="movie.awards"/>
                    </sui-form-field>

                    <sui-form-field>
                        <label>Plot</label>
                        <textarea v-model="movie.plot"></textarea>
                    </sui-form-field>

                    <sui-button primary v-on:click="submit">Submit</sui-button>
                </sui-form>
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
        name: 'MovieForm',
        data: () => {
            return {
                mode: "create",
                movie: Object,
                type_options: [{
                    text: "Movie",
                    value: "Movie",
                }, {
                    text: "TV show",
                    value: "TV show",
                },],
                no_picture
            }
        },
        created() {
            if (this.$route.params.id !== null) {
                this.movie = Object.assign({}, window.movies[this.$route.params.id]);
            } else {
                this.movie = {};
            }
        },
        methods: {
            submit() {
                if (this.movie.id === undefined) {
                    let greatest = 0;
                    for (let movie of window.movies) {
                        if (movie.id > greatest) {
                            greatest = movie.id;
                        }
                    }

                    this.movie.id = greatest + 1;
                }

                window.movies[this.movie.id] = this.movie;
                this.save();

                this.$router.back();
            },
        },
    }
</script>
