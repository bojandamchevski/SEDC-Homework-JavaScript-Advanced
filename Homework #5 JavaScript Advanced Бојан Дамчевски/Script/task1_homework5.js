document.getElementById("btn").addEventListener("click", () => {

    let div = document.getElementById("maindiv");

    async function getCurrency() {
        let response = await fetch("https://restcountries.eu/rest/v2/capital/tallinn");
        let data = await response.json();
        let currencyCode = data[0].currencies[0].code;

        let responseSecond = await fetch(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        let dataSecond = await responseSecond.json();
        let num = 1;
        dataSecond.forEach(country => {
            setTimeout(() => {
                div.innerHTML += `<p>${num++}.${country.name}</p>`;
                console.log(country.name)
            }, 2000);
        });
        let finalData = dataSecond.filter(country => country.currencies[0].code = "EUR")
            .map(country => country.name);
        console.log(`The number of countries that use the EURO is ${finalData.length}`);
        div.innerHTML = `<h2>The number of countries that use the EURO is ${finalData.length} and those countries are:</h2>`;
    }

    getCurrency();
});
