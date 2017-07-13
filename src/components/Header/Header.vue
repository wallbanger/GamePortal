<template>
    <header class="header">
        <router-link to="/">
            <img class="logo" src="../../assets/logo.svg">
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
</template>

<style scoped>

    .header {
        height: 100px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
