<template>
    <div id="app">
        <header class="header">
            <router-link to="/">
                <img class="logo" src="./assets/logo.svg">
            </router-link>
            <div class="nav">
                <div class="nav__block">
                    <router-link to="/">Home</router-link>
                    <router-link to="/page">Page</router-link>
                    <router-link to="/gamelist">Game List</router-link>
                </div>
                <div class="nav__block">
                    <router-link to="/login">Login</router-link>
                    <router-link to="/signup">Sign Up</router-link>
                </div>
            </div>
        </header>
        <router-view></router-view>
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
        font-weight: normal;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .header {
        height: 100px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }

    a:hover {
        color: #333;
    }

    .logo {
        width: 200px;
    }

    .nav {
        display: flex;
    }

    .nav__block {
        margin-left: 20px;
    }

</style>
