const { createApp } = Vue

createApp({
    data() {
        return {
            listMessage: "La lista di cose da fare",
            print: [],
            addCosa: "",
            addFare: "",
        }
    },
    methods: {
        //FUNZIONE CHE AL CLICK MI PASSA IL BOOLEANO DA TRUE A FALSE COSI CHE NELLA FUNZIONA DOPO GLI POSSO AGGIUNGERE LA CLASSE
        elementDone(index) {
            this.print[index].booleano = false
        },

        //FUNZIONE CHE QUANDO CLICCO SU LI IN INDEX MI PASSA IL BOOLEAN A FALSO E MI AGGIUNGE UNA RIGA SOPRA LA COSA CLICCATA
        lineTrough(index) {
            return (this.print[index].booleano == false) ? "text-decoration-line-through" : ""
        },

        addElement() {
            if (this.addCosa != "" && this.addFare != "") {
                this.print.push({ cosa: this.addCosa, fare: this.addFare, booleano: true })
                console.log("Elemento da aggiungere alla lista dato da valore di input", this.addCosa, this.Fare)
                this.addCosa = ""
                this.addFare = ""
            }
        }
    },
    mounted() {
        console.log("Funziona tutto");

        axios.get("../server.php").then(result => {
            console.log(result.data)
            this.print = result.data
            console.log(this.print)
        })
    }
}).mount('#app')