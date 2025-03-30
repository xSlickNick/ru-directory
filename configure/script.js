
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const code = urlParams.get("code") || "";

const baseURL = "https://xslicknick.github.io/spotify-widget";
const redirect_uri = `${baseURL}/configure`;
let refresh_token = "";
let access_token = "";
let browserSourceURL = "";

/////////
function SetScreenLocation() {
    const screenLocation = document.getElementsByClassName("floorButton").value
    localStorage.setItem("screenLocation", screenLocation)
}


function OpenInstructions() {
    window.open("https://www.twitch.tv/slickzayyy")
}