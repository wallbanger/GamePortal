<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <div class="banner">Home Banner</div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Home'
            }
        }
    }
</script>
