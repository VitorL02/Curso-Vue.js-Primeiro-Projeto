
new Vue ({
    el:'#desafio',
    data:{
        nome:'Vitor Lucas Crispim',
        idade: 21,
        imageLink:'https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png'
    },
    methods:{
        multiplicaIdade:function(){
             return this.idade * 3
        },
        randomizaNumero:function(){
            return Math.random(0,1)
        },
        

    }

})
