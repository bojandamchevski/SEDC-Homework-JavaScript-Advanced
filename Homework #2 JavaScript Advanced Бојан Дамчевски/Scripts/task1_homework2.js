$(document).ready(function () {
    let button = $("#btn");
    let body = $("body");
    body.append("<table id='table1'>");
    let table = $("table");
    table.append("<thead>");
    table.append("<tbody>");
    let tableHead = $("thead");
    let tableBody = $("tbody");
    table.hide();
    tableHead.append("<tr><td>Planet Name</td><td>Population</td><td>Climate</td><td>Gravity</td></tr>");
    let callApi = (url) => {
        table.show();
        $.ajax({
            method: "GET",
            url: url,
            success: (result) => {
                print(result);
            },
            error: (result) => {
                console.log("An ERROR has occured");
                console.log(result);
            }
        });

        let print = (data) => {
            for (let item of data.results) {
                tableBody.append(`<tr><td>${item.name}</td><td>${item.population}</td><td>${item.climate}</td><td>${item.gravity}</td></tr>`);
            }
        }
    }
    button.click(() => {
        button.hide();
        callApi("https://swapi.dev/api/planets/?page=1");
    });
});