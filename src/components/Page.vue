<template>
    <div class="page">
        <v-header></v-header>
        <h1>{{ msg }}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam?</p>
        <span class="btn" v-on:click="getUsers()">Show users</span>
        <span class="btn" v-on:click="deleteUser()">Delete user number 4</span>
        <div>{{ users }}</div>
    </div>
</template>

<script>
    import Header from './Header'

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
                this.$Progress.start()
                this.$http.get('http://localhost:8081/usersList', []).then(response => {
                    console.log(response.status, response.body);
                    this.users = response.body;
                    this.$Progress.finish()
                }, response => {
                    console.log('Error');
                });
            },
            deleteUser() {
                this.$http.delete('http://localhost:8081/deleteUser/4', []).then(response => {
                    console.log(response.status, response.body);
            }, response => {
                    console.log('Error');
                });
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
