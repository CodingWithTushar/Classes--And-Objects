// console.log('Its Working');

// let student = {
//     Name:"Tushar",
//     Class: "10Th",
//     Subject: "Science"
// }

// console.log(student);

// let animal = {
//     eats:true
// };
// let rabbit = {
//     jump: true
// };
// rabbit.__proto__= animal;
//  sets Rabbit.[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log('Oject Is Created...');
    }
    Eats() {
        console.log('I Am Eating Now Can We Talk Later');
    }
    Jumps() {
        console.log('I Am Jumping Now Can We Talk Later');
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        this.name = name
        console.log('Oject Is Created  And He Is A Lion ...');
    }
    Eats() {
        console.log('I Am Eating And Roaring');
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Tiger")
console.log(l);

class User {
    constructor() {
        console.log("Hello Add And Minus")
    }
    ADD() {
        console.log(a + b);
    }
    MINUS() {
        console.log(a - b);
    }
}

let Tushar = new User("Tushar")
console.log(Tushar);


console.log(User());


