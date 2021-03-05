function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName} ${this.age}`);
    };
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        console.log(`The cat ${this.name} is eating!`);
    };
    this.sleep = function () {
        console.log(`The cat ${this.name} is sleeping!`);
    };
}

function Cat(color, name, age, ownerId) {
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = []; //jas ova namesto null, prazna niza ke go napravam za da ima poveke owners;
    this.meow = function () {
        console.log(`The cat ${this.name} says Meow!`);
    };
    this.addOwner = function (owner) {
        this.ownerId.push(owner);
    };
    this.printOwnerDetails = function () {
        if (this.ownerId.length === 0) {
            console.log("There are no owners!");
            return;
        }
        if (this.ownerId.length > 0) {
            this.ownerId.forEach(person => console.log(`${this.name} owner is ${person.firstName} ${person.lastName} age: ${person.age}`));
        }
    }
}

function PersianCat(eyeColor, color, name, age) {
    Object.setPrototypeOf(this, new Cat(color, name, age));
    this.eyeColor = eyeColor;
    this.furDescription = function () {
        console.log(`The Persian cat ${this.name} has full fur!`);
    }
}

function RagDollCat(weight, isFriendly, color, name, age) {
    Object.setPrototypeOf(this, new Cat(color, name, age));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function (type) {
        if (type === true) {
            this.isFriendly = true;
            console.log(`The cat ${this.name} is friendly!`);
        }
        else {
            this.isFriendly = false;
            console.log(`The cat ${this.name} is not friendly!`);
        }
    }
}

let arrayOfPeople = [new Person("John", "Smith", 37), new Person("Maggie", "McClain", 31), new Person("Jill", "Jackson", 25), new Person("Michael", "Hartson", 27), new Person("Marie", "Mikelsen", 19)];



let arrayOfColors = ["brown", "gray", "white", "black", "orange"];

var cat1 = new Cat(arrayOfColors[0], "Toby", 4);
var cat2 = new Cat(arrayOfColors[1], "Judy", 2);
var persianCat = new PersianCat("blue", arrayOfColors[2], "Idira", 3);
var ragDollCat = new RagDollCat(20, true, arrayOfColors[3], "Mich", 2);
var ragDollCat2 = new RagDollCat(10, false, arrayOfColors[4], "Isabella", 1);

cat1.eat();
cat2.sleep();
persianCat.meow();
cat1.addOwner(arrayOfPeople[0]);
cat2.addOwner(arrayOfPeople[1]);
persianCat.addOwner(arrayOfPeople[2]);
ragDollCat.addOwner(arrayOfPeople[3]);
ragDollCat2.addOwner(arrayOfPeople[4]);

cat1.printOwnerDetails();
cat2.printOwnerDetails();
persianCat.printOwnerDetails();
ragDollCat.printOwnerDetails();

persianCat.furDescription();
ragDollCat.printPersonality(ragDollCat.isFriendly);
ragDollCat2.printPersonality(ragDollCat2.isFriendly);

console.log(cat1);
console.log(cat2);
console.log(persianCat);
console.log(ragDollCat);
console.log(ragDollCat2);