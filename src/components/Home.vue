<template>
    <div class="home">
        <v-header></v-header>
        <h1>{{ msg }}</h1>
        <div class="banner">Home Banner</div>
    </div>
</template>

<script>
    import Header from './Header'

    export default {
        name: 'home',
        components: {
            'v-header': Header
        },
        data () {
            return {
                msg: 'Home'
            }
        }
    }
</script>
