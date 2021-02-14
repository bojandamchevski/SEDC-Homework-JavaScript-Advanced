$(document).ready(function () {
    let button = $("#btn");
    let body = $("body");
    button.click(() => {
        button.hide();
        body.append("<table id='table1'>");
        let table = $("table");
        table.append("<thead>");
        table.append("<tbody>");
        let tableHead = $("thead");
        let tableBody = $("tbody");
        tableHead.append("<tr><td>Planet Name</td><td>Population</td><td>Climate</td><td>Gravity</td></tr>");
        $.ajax({
            method: "GET",
            url: "https://swapi.dev/api/planets/?page=1",
            success: (result) => {
                for(let item of result.results){
                    tableBody.append(`<tr><td>${item.name}</td><td>${item.population}</td><td>${item.climate}</td><td>${item.gravity}</td></tr>`);
                }
            },
            error: (result) =>{
                console.log("An ERROR has occured");
                console.log(result);
            }
        });
    });
});