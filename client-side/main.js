const { createApp } = Vue

createApp({
    data() {
        return {
            listMessage: "La lista di cose da fare",
            todoList: [],
            addCosa: "",
            addFare: "",
            postConfig: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        }
    },
    methods: {
        getList() {
            axios.get("../list.php").then(result => {
                console.log(result.data)
                this.todoList = result.data
                console.log(this.todoList)
            })
        },

        //FUNZIONE CHE AL CLICK MI PASSA IL BOOLEANO DA TRUE A FALSE COSI CHE NELLA FUNZIONA DOPO GLI POSSO AGGIUNGERE LA CLASSE
        elementDone(index) {
            this.todoList[index].booleano = false
        },

        //FUNZIONE CHE QUANDO CLICCO SU LI IN INDEX MI PASSA IL BOOLEAN A FALSO E MI AGGIUNGE UNA RIGA SOPRA LA COSA CLICCATA
        lineTrough(index) {
            return (this.todoList[index].booleano == false) ? "text-decoration-line-through" : ""
        },

        addElement() {
            //CREO COSTANTE CHE POI MI SERVE DA RICHIAMARE NEL AXIOS.POST
            const newElementTodo = {
                cosa: this.addCosa,
                fare: this.addFare,
            };

            //METODO AXIOS CON CUI INVIO I DATI AL CREATE.PHP E GLI DO IL PERCORSO IL NOME DELLA COSTANTE DOVE MI ARRIVANO I DATI DA INPUT E LA VARIABILE POST CONFIG CHE MI DA IL METODO HEADERS
            axios.post("../create.php", newElementTodo, this.postConfig).then(result => {
                if (this.addCosa != "" && this.addFare != "") {
                    this.todoList = result.data
                    console.log("Elemento da aggiungere alla lista dato da valore di input", this.addCosa, this.Fare)
                    this.addCosa = ""
                    this.addFare = ""
                    console.log("Hai aggiunto un nuovo elemento alla lista")
                }
            })
        }
    },
    mounted() {
        console.log("Funziona tutto");

        this.getList()

    }
}).mount('#app')