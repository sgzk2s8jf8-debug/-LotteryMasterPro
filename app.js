function randomNumbers(count, max) {

    let numbers = [];

    while (numbers.length < count) {

        let n = Math.floor(Math.random() * max) + 1;

        if (!numbers.includes(n)) {
            numbers.push(n);
        }
    }

    return numbers.sort((a,b)=>a-b);
}



function generate() {

    let game =
    document.getElementById("game").value;


    let amount =
    Number(document.getElementById("amount").value);


    let results =
    document.getElementById("results");


    results.innerHTML = "";


    for (let i = 1; i <= amount; i++) {


        let output = "";


        if (game === "lotto49") {

            let numbers = randomNumbers(6,49);

            output =
            numbers.join(" - ");

        }


        else if (game === "lotto59") {

            let numbers = randomNumbers(6,59);

            output =
            numbers.join(" - ");

        }


        else if (game === "setlife") {

    let numbers = randomNumbers(5,47);

    let lifeBall = 
    Math.floor(Math.random() * 10) + 1;

    output =
    "Numere: " + numbers.join(" - ")
    +
    "<br>🟢 Vila Vieții (Life Ball): "
    +
    lifeBall;

}


        else if (game === "euromillions") {

    let numbers = randomNumbers(5,50);

    let stars = randomNumbers(2,12);

    output =
    "Numere: "
    +
    numbers.join(" - ")
    +
    "<br>⭐ Stele norocoase: "
    +
    stars.join(" - ");

}


        else if (game === "eurojackpot") {

    let numbers = randomNumbers(5,50);

    let euroNumbers = randomNumbers(2,12);

    output =
    "Numere: "
    +
    numbers.join(" - ")
    +
    "<br>⭐ Numere Euro: "
    +
    euroNumbers.join(" - ");

}



        let div =
        document.createElement("div");


        div.className="result";


        div.innerHTML =
        "Varianta "
        + i +
        ":<br>"
        + output;


        results.appendChild(div);

    }

}
