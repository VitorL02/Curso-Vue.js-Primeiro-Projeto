new Vue({
    el: '#desafio',
    data: {
        valor: '',

    },
    methods:{
        alertButton(){
            alert('Olá você apertou o botão')
        },
        alteraParagrafo(event){
            this.valor = event.target.value
        },

    }
})