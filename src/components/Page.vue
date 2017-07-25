<template>
    <div class="page">
        <v-header></v-header>
        <h1>{{ msg }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam?</p>
        <span class="btn" v-on:click="getUsers()">Show users</span>
        <span class="btn" v-on:click="deleteUser()">Delete user number 4</span>
        <span class="btn" v-on:click="register()">reg</span>
        <div>{{ users }}</div>
    </div>
</template>

<script>
    import Header from './Header'
    import auth from '../auth'

    export default {
        name: 'page',
        components: {
            'v-header': Header
        },
        data () {
            return {
                msg: 'Page',
                users: ''
            }
        },
        methods: {
            getUsers() {
                auth.getUsers(this);
            },
            deleteUser() {
                auth.deleteUser(this);
            },
            register() {
                auth.register(this)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .btn {
        background: #efefef;
        padding: 5px;
        display: inline-block;
        cursor: pointer;
    }

</style>
