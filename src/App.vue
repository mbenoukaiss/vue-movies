<template>
    <sui-container>
        <sui-menu pointing secondary>
            <a is="sui-menu-item"
                    v-for="item in items"
                    :active="isActive(item)"
                    :key="item.route"
                    :content="item.name"
                    @click="select(item)"
            />
        </sui-menu>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </sui-container>
</template>

<script>
    export default {
        data() {
            return {
                active: 'List',
                items: [{
                    name: 'List',
                    route: 'movie_list'
                }, {
                    name: 'Add a movie',
                    route: 'movie_add'
                }],
            };
        },
        methods: {
            isActive(item) {
                return this.active === item.name;
            },
            select(item) {
                this.$router.push({ name: item.route });
                this.active = item.name;
            },
        }
    }
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
