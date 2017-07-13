<template>
    <div class="signup">
        <h1>{{ msg }}</h1>
        <form action="">
            <input type="text" placeholder="email">
            <input type="text" placeholder="password">
            <input type="text" placeholder="nickname">
            <input type="submit">
        </form>
        <router-link to="/">
            <div class="close">close</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'signup',
        data () {
            return {
                msg: 'Sign Up'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    form {
        margin: auto;
        display: flex;
        flex-direction: column;
        width: 200px;
    }

    input {
        margin-bottom: 10px;
        padding: 5px;
    }

    .close {
        position: absolute;
        top: 58px;
        right: 20px;
    }

</style>
