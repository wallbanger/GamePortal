<template>
    <div id="app">
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2 {
        font-weight: 400;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }

    a:hover {
        color: #333;
    }

</style>
