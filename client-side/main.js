const { createApp } = Vue

createApp({
    data() {
        return {
            welcomeMessage: "Ciao vue funziona",
            print: []
        }
    },
    methods: {

    },
    mounted() {
        console.log("Funziona tutto");

        axios.get("../server.php").then(result => {
            console.log(result.data)
            this.print = result
            console.log(this.print)
        })
    }
}).mount('#app')