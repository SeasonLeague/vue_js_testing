const app = Vue.createApp({
    // template: '<div><img v-bind:src="picture" alt="Pics"><h1>Hello {{ firstName }} {{ lastName }}</h1><h3>Email: {{ email }}</h3><button>Get Random User</button></div>',
    data() {
        return {
            firstName: 'Tracey',
            lastName: 'Hughes',
            email: 'traceyhughes@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/med/women/5.jpg',
        }
    },
    methods: {
      async getUser() {
        // console.log("getUser() method is called");
        const res = await fetch("https://randomuser.me/api")
        const { results } = await res.json()
        // console.log(results)

        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
      },
    },
})

app.mount("#app");
