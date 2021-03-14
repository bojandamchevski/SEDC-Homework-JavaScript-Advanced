const fs = require("fs");
var someJsonFile = "students.json";

module.exports = {
    writeFunction: (input) => {
        fs.writeFileSync(someJsonFile, input, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Success !");
        })
    },
    readFunction: () => {
        var read = fs.readFileSync(someJsonFile, { encoding: "UTF - 8" });
        return JSON.parse(read);
    }
}