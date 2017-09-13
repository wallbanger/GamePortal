const API_URL = 'http://localhost:8081/'
const DELETE_URL = API_URL + 'delete_user/'
const USERS_URL = API_URL + 'users_list/'
const SIGNUP_URL = API_URL + 'add_user/'

export default {
    getUsers(context) {
        context.$Progress.start()
        
        context.$http.get(USERS_URL).then(response => {
            context.users = response.body;
            context.$Progress.finish()
        }, response => {
            console.error('Get users list error')
            context.$Progress.fail()
        });
    },

    deleteUser(context) {
        context.$Progress.start()

        context.$http.delete(DELETE_URL + '2').then(response => {
            context.$Progress.finish()
        }, response => {
            console.error('Delete user error')
            context.$Progress.fail()
        });
    },

    register(context, creds) {
        context.$Progress.start()

        context.$http.post(SIGNUP_URL, creds).then(response => {
            var arr = response.body
            console.log(arr, response.status, response.statusText);
        }, response => {
            console.error('Register error')
            context.$Progress.fail()
        });
    }
}
