const { createApp } = Vue

createApp({
    data() {
        return {
            welcomeMessage: "Ciao vue funziona"
        }
    },
    methods: {

    },
    mounted() {
        console.log("Funziona tutto");
    }
}).mount('#app')