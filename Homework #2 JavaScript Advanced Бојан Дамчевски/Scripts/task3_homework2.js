let arrayFirstNames = ["Joey", "Chandler", "Ross", "Rachel", "Monica"];
let arrayLastNames = ["Tribianni", "Bing", "Geller", "Green", "Geller"];

let result = (function (arr1, arr2) {
    let arrayFullNames = [];
    let fullName = "";
    for (let i = 0; i < arr1.length; i++) {
        fullName = arr1[i] +" "+ arr2[i];
        arrayFullNames.push(fullName);
    }
    return arrayFullNames;
})(arrayFirstNames, arrayLastNames);

console.log(result);