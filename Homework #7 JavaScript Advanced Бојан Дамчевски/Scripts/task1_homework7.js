function Person(firstName, lastName, age, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
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
    this.ownerId = ownerId;
    this.meow = function () {
        console.log(`The cat ${this.name} says Meow!`);
    };
    this.printOwnerDetails = function (owner) {
        if (this.ownerId != owner.id) {
            console.log("There are no owners!");
            return;
        }
        if (this.ownerId == owner.id) {
            console.log(`The cat ${this.name} has the following owner:`)
            owner.getFullName();
        }
    }
}

function PersianCat(eyeColor, color, name, age, ownerId) {
    Object.setPrototypeOf(this, new Cat(color, name, age, ownerId));
    this.eyeColor = eyeColor;
    this.furDescription = function () {
        console.log(`The Persian cat ${this.name} has full fur!`);
    }
}

function RagDollCat(weight, isFriendly, color, name, age, ownerId) {
    Object.setPrototypeOf(this, new Cat(color, name, age, ownerId));
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

let arrayOfPeople = [new Person("John", "Smith", 37, 1), new Person("Maggie", "McClain", 31, 2), new Person("Jill", "Jackson", 25, 3), new Person("Michael", "Hartson", 27, 4), new Person("Marie", "Mikelsen", 19, 5)];



let arrayOfColors = ["brown", "gray", "white", "black", "orange"];

var cat1 = new Cat(arrayOfColors[0], "Toby", 4, 1);
var cat2 = new Cat(arrayOfColors[1], "Judy", 2, 2);
var persianCat = new PersianCat("blue", arrayOfColors[2], "Idira", 3, 3);
var ragDollCat = new RagDollCat(20, true, arrayOfColors[3], "Mich", 2, 4);
var ragDollCat2 = new RagDollCat(10, false, arrayOfColors[4], "Isabella", 1, 5);

cat1.eat();
cat2.sleep();
persianCat.meow();

cat1.printOwnerDetails(arrayOfPeople[0]);
cat2.printOwnerDetails(arrayOfPeople[1]);
persianCat.printOwnerDetails(arrayOfPeople[2]);
ragDollCat.printOwnerDetails(arrayOfPeople[3]);

persianCat.furDescription();
ragDollCat.printPersonality(ragDollCat.isFriendly);
ragDollCat2.printPersonality(ragDollCat2.isFriendly);

console.log(cat1);
console.log(cat2);
console.log(persianCat);
console.log(ragDollCat);
console.log(ragDollCat2);