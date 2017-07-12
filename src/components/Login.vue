<template>
    <div class="login">
        <h1>{{ msg }}</h1>
        <form action="">
            <input type="text" placeholder="email">
            <input type="text" placeholder="password">
            <input type="submit">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                msg: 'Login'
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

</style>
