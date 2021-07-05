let pozice = 0;
let pokusy = 0;
let uhodnotepokusy = 0;
var sekundy = 0;
let max = 6;
var prvnikarta, druhakarta;
var pocet = document.getElementById("pocet");



function count() {

    sekundy += 1;
    document.getElementById("cas").innerHTML = "strávený čas: " + sekundy + " sekund";
}
var cass = setInterval(count, 1000);
$(window).on("load", function () {
    var iconArray = new Array("glass", "music", "search", "envelope-o", "heart", "star", "glass", "music", "search", "envelope-o", "heart", "star");
    var doc = document.getElementsByClassName("back");

    for (let index = 0; index < doc.length; index++) {
        var id = document.getElementById("main");
        var randIcon = Math.floor(Math.random() * (iconArray.length));
        $(doc[index]).append("<i class='" + "fa fa-" + iconArray[randIcon] + "'></i>");         //přidá k zadní straně náhodné logo

        id.id = "main" + iconArray[randIcon];
        iconArray.splice(randIcon, 1);
    }
});
function vytvor() {
    const element = document.createElement("div");
    const element2 = document.createElement("div");
    const element3 = document.createElement("div");

    element.id = "pocet";
    element.className = "pocet";
    element2.className = "pocet";
    element3.className = "pocet";
    element2.id = "cas";
    element3.id = "odpocet";

    const popisek = document.createTextNode("počet pokusů: ");
    const popisek2 = document.createTextNode("strávený čas: ");
    const popisek3 = document.createTextNode("zbývá " + max + "/6");

    element.appendChild(popisek);
    element2.appendChild(popisek2);
    element3.appendChild(popisek3);

    const box = document.getElementById("box");

    box.appendChild(element3);
    box.appendChild(element);
    box.appendChild(element2);


}
function resetuj() {
    pozice = 0;
    pocet += 1;
    document.getElementById("pocet").innerHTML = "počet pokusů: " + pocet;  //připočtení pokusů
}
