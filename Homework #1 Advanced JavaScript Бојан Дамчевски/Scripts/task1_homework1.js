$(document).ready(function () {
    let button = $("#btn");
    button.after("<ul>");
    let unorderedList = $("ul");

    function printData() {
        $.ajax({
            method: "GET",
            url: "https://api.openaq.org/v1/cities",
            success: function (result) {
                unorderedList.append("<hr>");
                for (let i = 1; i <= 10; i++) {
                    unorderedList.append(`<li><b>Country:</b> ${result.results[i].country} <b>City:</b> ${result.results[i].name} <b>Name:</b> ${result.results[i].city} <b>Count:</b> ${result.results[i].count} <b>Locations:</b> ${result.results[i].locations}</li><br>`);
                }
                unorderedList.append("<hr>");
            },
            error: function (result) {
                console.log(`There has been an ERROR in the process: ${result}`);
            }
        });
        $.ajax({
            method: "GET",
            url: " https://pokeapi.co/api/v2/pokemon",
            success: function (result) {
                unorderedList.append("<hr>");
                for (let i = 1; i <= 10; i++) {
                    unorderedList.append(`<li><b>Name:</b> ${result.results[i].name} <b> URL:</b>${result.results[i].url}</li><br>`);
                }
                unorderedList.append("<hr>");
            },
            error: function (result) {
                console.log(`There has been an ERROR in the process: ${result}`);
            }
        });
    }

    button.click(function () {
        printData();
        button.hide();
    });
});