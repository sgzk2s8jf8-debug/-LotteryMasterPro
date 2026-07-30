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

            output =
            "Numere: " +
            randomNumbers(6,49).join(" - ");

        }


        else if (game === "lotto59") {

            output =
            "Numere: " +
            randomNumbers(6,59).join(" - ");

        }


        else if (game === "setlife") {

            let numbers =
            randomNumbers(5,47);

            let lifeBall =
            Math.floor(Math.random()*10)+1;


            output =
            "Numere: "
            + numbers.join(" - ")
            +
            "<br>🟢 Life Ball: "
            + lifeBall;

        }


        else if (game === "euromillions") {

            let numbers =
            randomNumbers(5,50);

            let stars =
            randomNumbers(2,12);


            output =
            "Numere: "
            + numbers.join(" - ")
            +
            "<br>⭐ Lucky Stars: "
            + stars.join(" - ");

        }


        else if (game === "eurojackpot") {

            let numbers =
            randomNumbers(5,50);

            let euro =
            randomNumbers(2,12);


            output =
            "Numere: "
            + numbers.join(" - ")
            +
            "<br>⭐ Euro Numbers: "
            + euro.join(" - ");

        }



        let ticket = {

            game: game,

            date:
            new Date()
            .toLocaleString(),

            numbers:
            output

        };


        saveHistory(ticket);



        let div =
        document.createElement("div");


        div.className="result";


        div.innerHTML =

        "Varianta "
        + i
        + ":<br>"
        + output
        +
        "<br><br>";


        let button =
        document.createElement("button");


        button.innerHTML =
        "⭐ Salvează Favorite";


        button.onclick=function(){

            saveFavorite(ticket);

            button.innerHTML =
            "✅ Salvat";

        };


        div.appendChild(button);


        results.appendChild(div);

    }

}
function hidePages(){

    document.querySelector(".container").style.display = "none";

    document.getElementById("favoritesPage").style.display = "none";

    document.getElementById("historyPage").style.display = "none";

}



function showGenerator(){

    hidePages();

    document.querySelector(".container").style.display = "block";

}



function showFavorites(){

    hidePages();

    document.getElementById("favoritesPage").style.display = "block";


    let box =
    document.getElementById("favorites");


    box.innerHTML="";


    let favorites =
    getFavorites();


    if(favorites.length === 0){

        box.innerHTML =
        "Nu ai bilete favorite încă.";

        return;

    }



    favorites.forEach((ticket,index)=>{


        let div =
        document.createElement("div");


        div.className="result";


        div.innerHTML =

        "<b>"
        + ticket.game
        +"</b><br>"
        +
        ticket.numbers
        +
        "<br>"
        +
        ticket.date
        +
        "<br><br>";



        let button =
        document.createElement("button");


        button.innerHTML =
        "❌ Șterge";


        button.onclick=function(){

            deleteFavorite(index);

            showFavorites();

        };


        div.appendChild(button);


        box.appendChild(div);


    });


}



function showHistory(){

    hidePages();

    document.getElementById("historyPage").style.display = "block";


    let box =
    document.getElementById("history");


    box.innerHTML="";


    let history =
    getHistory();



    if(history.length === 0){

        box.innerHTML =
        "Nu există istoric.";

        return;

    }



    history.forEach(ticket=>{


        let div =
        document.createElement("div");


        div.className="result";


        div.innerHTML =

        "<b>"
        + ticket.game
        +"</b><br>"
        +
        ticket.numbers
        +
        "<br>"
        +
        ticket.date;


        box.appendChild(div);


    });


}
function createBalls(numbers, type="normal") {

    let html = "";

    numbers.forEach(number => {

        html += 
        `<span class="ball ${type}">
            ${number}
        </span>`;

    });

    return html;
}