function Product(name, category, hasDiscount, price) {
    this.name = name,
        this.category = category,
        this.price = price,
        this.hasDiscount = hasDiscount
}

let products = [
    new Product("Laptop", "Technology", true, 35000),
    new Product("EBook", "Office", false, 60),
    new Product("Fish", "Food", true, 230),
    new Product("VR set", "Technology", false, 31000),
    new Product("TV", "Technology", true, 70000),
    new Product("Pen", "Office", true, 15),
    new Product("AChicken", "Food", false, 240),
    new Product("ITablet", "Technology", false, 18000),
    new Product("Cake", "Food", true, 500),
    new Product("Monitor", "Technology", false, 8000),
    new Product("Orange Juice", "Food", true, 54),
    new Product("Desk", "Office", false, 17000),
    new Product("Smart Phone", "Technology", false, 14500),
    new Product("Chair", "Office", false, 8200),
    new Product("Speakers", "Technology", true, 22000)
];

console.log("===== Price greater than 20 =====");
let productsWithPriceGreaterThan20 = products.filter(product => product.price > 20);
let productsWithPriceGreaterThan20Map = productsWithPriceGreaterThan20.map(p => p.name);
console.log(productsWithPriceGreaterThan20);
console.log(productsWithPriceGreaterThan20Map);
productsWithPriceGreaterThan20.forEach(p => console.log(p.name));

console.log("===== Category Food on discount =====");
let foodProducts = products.filter(product => product.category == "Food" && product.hasDiscount === true);
let foodProductsMap = foodProducts.map(p => p.name)
console.log(foodProducts);
console.log(foodProductsMap);
foodProducts.forEach(p => console.log(p.name));


console.log("===== Average price of all products that are on discount =====");
function averagePrice(sum, price) {
    return sum += price;
}

let productsOnDiscount = products.filter(product => product.hasDiscount === true);
let productsOnDiscountMap = productsOnDiscount.map(p => p.price)
    .reduce(averagePrice, 0);
let average = productsOnDiscountMap / productsOnDiscount.length;
console.log(average);

console.log("===== Products which name starts with a vowel =====");
let productsNotOnDiscount = products.filter(product => product.hasDiscount === false).map(product => product.name);
console.log(productsNotOnDiscount);
function startsWithVowel(word) {
    console.log(productsNotOnDiscount.filter(p => /^[aeiou]/i.test(p)));
}
startsWithVowel(productsNotOnDiscount);

console.log("===== Sort the products by price ascending =====");
function copyOfArray(arr) {
    let newArray = [];
    arr.forEach(product => newArray.push(product));
    return newArray;
}
let newArrayCopy = copyOfArray(products);
newArrayCopy.sort((p1, p2) => p1.price - p2.price);
console.log(newArrayCopy);
newArrayCopy.forEach(p => console.log(`${p.name} ${p.price}`));