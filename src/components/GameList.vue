<template>
    <div class="gamelist">
        <v-header></v-header>
        <h1>{{ msg }}</h1>
        <p>Game list</p>
    </div>
</template>

<script>
    import Header from './Header'

    export default {
        name: 'gamelist',
        components: {
            'v-header': Header
        },
        data () {
            return {
                msg: 'Games'
            }
        }
    }
</script>
