document.getElementById("btn").addEventListener("click", () => {
    let enteredText = document.getElementById("input").value;
    let result = document.getElementById("result");
    function getString(input) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!input || input.length === 0 || typeof (input) !== "string" || Number(input)) {
                    reject(input);
                }
                resolve(input);
            }, 4000);
        });
    };

    getString(enteredText)
        .then(res => {
            result.innerHTML = `<p>The input you have entered <span>${res}</span> is valid</p>`;
        })
        .catch(err => {
            result.innerHTML = `<p>The input you have entered <span>${err}</span> is not valid</p>`;
        })
        .finally(() => {
            result.after = "<p>Code finished !!!</p>";
        })
});