const FAVORITES_KEY = "lottery_favorites";
const HISTORY_KEY = "lottery_history";


function getFavorites(){

    return JSON.parse(
        localStorage.getItem(FAVORITES_KEY)
    ) || [];

}



function saveFavorite(ticket){

    let favorites = getFavorites();

    favorites.push(ticket);

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );

}



function deleteFavorite(index){

    let favorites = getFavorites();

    favorites.splice(index,1);

    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );

}



function getHistory(){

    return JSON.parse(
        localStorage.getItem(HISTORY_KEY)
    ) || [];

}



function saveHistory(ticket){

    let history = getHistory();

    history.unshift(ticket);


    // păstrăm ultimele 50
    history = history.slice(0,50);


    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );

}