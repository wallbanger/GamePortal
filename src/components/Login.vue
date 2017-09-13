<template>
    <div class="login">
        <h1>{{ title }}</h1>
        <div class="form-group">
            <input
                type="text"
                class="form-control"
                placeholder="Enter your username"
                v-model="credentials.username"
            >
        </div>
        <div class="form-group">
            <input
                type="password"
                class="form-control"
                placeholder="Enter your password"
                v-model="credentials.password"
            >
        </div>
        <button class="btn btn-primary" @click="submit()">Access</button>
        <router-link to="/">
            <div class="close">close</div>
        </router-link>
    </div>
</template>

<script>
    import auth from '../auth'

    export default {
        name: 'login',
        data () {
            return {
                title: 'Login',
                credentials: {
                    username: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {

            submit() {
                var credentials = {
                    username: this.credentials.username,
                    password: this.credentials.password
                }

                auth.login(this, credentials)
                console.log(credentials);
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
