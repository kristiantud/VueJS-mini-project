// NOTES:
// we can use any variable created in data() in our main index.html file


const app = Vue.createApp({
    
    data(){
        return {
            firstName: 'Neo',
            lastName: '',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            gender: 'male',
            email: 'neo@matrix.com'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.picture = results[0].picture.large
            this.gender = results[0].gender
            this.email = results[0].email
        }
    }
})

app.mount('#app');