var app = new Vue({
    el: '#root',
    data: {
        header: "Hello welcome",
        newAnimal: {name: '', age: null},//[{name: '', age: null}],
        name: '',
        age: '',
        animals: [ 
            {name: 'cat', age: "24"},
            {name: 'dog', age: "12"},
            {name: 'rabbit', age: "2"},
            {name: 'rat', age: "1"} 
        ]
           
        
    },
    
    methods: {
        addAnimal: function(n,a){
            this.animals.push({ name: this.name, age: this.age})
            this.name = ""
            this.age = null
            


        }
    }
});