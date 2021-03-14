const http = require("http");
const hostname = "127.0.0.1";
const port = "3000";

let arrayOfStudents = [
    {
        fullName: "John Smith",
        academy: "SEDC",
        age: 34
    },
    {
        fullName: "Joey Tribianni",
        academy: "SEDC",
        age: 30
    }
]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(arrayOfStudents));
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`This server runs on port ${port} and hostname ${hostname}`);
})