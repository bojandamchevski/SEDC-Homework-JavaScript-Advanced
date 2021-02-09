let button = document.getElementById("btn");
let body = document.getElementsByTagName("body")[0];

function getInfo() {
    let table = document.createElement("table");
    table.setAttribute("border","3px");
    table.setAttribute("border","solid");
    let tableHead = document.createElement("thead");
    let tableBody = document.createElement("tbody");
    body.appendChild(table);
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    table.style.borderColor = "red";
    tableHead.style.fontWeight = "700";

    tableHead.innerHTML = "<tr><td>ID</td><td>Name</td><td>Username</td><td>E-mail</td><td>Street</td><td>Suite</td><td>City</td><td>Zip Code</td><td>Latitude</td><td>Longitude</td><td>Phone</td><td>Website</td><td>Company</td><td>Catch Phrase</td></tr>";

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            response.json()
                .then(data => {
                    tableBody.innerHTML = `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.username}</td><td>${data.email}</td><td>${data.address.street}</td><td>${data.address.suite}</td><td>${data.address.city}</td><td>${data.address.zipcode}</td><td>${data.address.geo.lat}</td><td>${data.address.geo.lng}</td><td>${data.phone}</td><td>${data.website}</td><td>${data.company.name}</td><td>${data.company.catchPhrase}</td></tr>`;
                });
        })
        .catch(err => {
            console.log(err)
        })
}

button.addEventListener("click", function () {
    getInfo();
    button.style.display = "none";
});