$(document).ready(function () {
    let button = $("#btn");
    let buttonNext = $("#btn1").hide();
    let buttonPrevious = $("#btn2").hide();
    let body = $("body");
    let i = 1;
    body.append("<table id='table1'>");
    let table = $("table").hide();
    
    let print = () => {
        table.show()
        table.html("");
        table.append("<thead>");
        table.append("<tbody>");
        let tableHead = $("thead");
        let tableBody = $("tbody");
        tableHead.append("<tr><td>Planet Name</td><td>Rotation Period</td><td>Orbital Period</td><td>Diameter</td><td>Terrain</td><td>Population</td><td>Climate</td><td>Gravity</td><td>Surface Water</td></tr>");
        $.ajax({
            method: "GET",
            url: `https://swapi.dev/api/planets/?page=${i}`,
            success: (result) => {
                for (let item of result.results) {
                    tableBody.append(`<tr><td>${item.name}</td><td>${item.rotation_period}</td><td>${item.orbital_period}</td><td>${item.diameter}</td><td>${item.terrain}</td><td>${item.population}</td><td>${item.climate}</td><td>${item.gravity}</td><td>${item.surface_water}</td></tr>`);
                }
            },
            error: (result) => {
                console.log("An ERROR has occured");
                console.log(result);
            }
        });
    };
    
    button.click(() => {
        button.hide();
        print();
        buttonNext.show();
    })
    buttonNext.click(() => {
        i++;
        buttonPrevious.show();
        print();
        i === 6 ? buttonNext.hide() : buttonNext.show();
    });
    buttonPrevious.click(() => {
        i--;
        print();
        i === 6 ? buttonNext.hide() : buttonNext.show();
        i === 1 ? buttonPrevious.hide() : buttonPrevious.show();
    });
});