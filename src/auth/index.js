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

            // ToDo: remove
            var arr = JSON.parse(response.body)
            console.log(arr);

        }, response => {
            console.error('Error')
            context.$Progress.fail()
        });
    },

    deleteUser(context) {
        context.$Progress.start()

        context.$http.delete(DELETE_URL + '2').then(response => {
            console.log(response.status, response.body);
            context.$Progress.finish()
        }, response => {
            console.error('Error')
            context.$Progress.fail()
        });
    },

    register(context) {
        context.$Progress.start()

        context.$http.post(SIGNUP_URL, { username: 'sss' }).then(response => {
            var arr = JSON.parse(response.body)
            console.log(arr);
        }, response => {
            console.error('Error')
            context.$Progress.fail()
        });
    }
}
