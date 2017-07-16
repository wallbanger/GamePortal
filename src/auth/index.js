export default {
    getUsers(context) {
        context.$Progress.start()
        
        context.$http.get('http://localhost:8081/users_list').then(response => {
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

        context.$http.delete('http://localhost:8081/delete_user/2').then(response => {
            console.log(response.status, response.body);
            context.$Progress.finish()
        }, response => {
            console.error('Error')
            context.$Progress.fail()
        });
    }
}
