
var chaussure = 0;
var skates = 0;
var tee = 0;
var n = 0.
var m = 0;
var f = 0;
var pant = 0;
var caps = 0;
var total = chaussure + skates + tee + pant + caps;

function cookieClick(number) {
    chaussure = chaussure + number ;
    document.getElementById ("chaussure")
    .innerHTML = chaussure;
    document.getElementById(
    "cookiesper").innerHTML = 
    skates + tee + pant +
    caps;
    document.title = chaussure + " chaussure";
};


function BuySkate() {
    var skateCost = Math.floor(10 * 
        Math.pow(1.1, skates));
    if (chaussure >= skateCost) {
        skates = skates + 
        1;
        chaussure = chaussure - skateCost; 
        document.getElementById("skates")
        .innerHTML = skates;
        document.getElementById("chaussure")
        .innerHTML = chaussure;
};
var nextCost = Math.floor (10 * Math.
    pow(1.1, skates));
document.getElementById(
    "skateCost").innerHTML = nextCost;
};

function buyTee() {
  var teeCost = Math.floor(100 * Math.pow(1.03, tee));
    if (chaussure >= teeCost) {
        tee = tee +
            10;
        chaussure = chaussure - teeCost;
        document.getElementById("tee")
            .innerHTML = n += 1;
        document.getElementById("chaussure")
            .innerHTML = chaussure;
    };
   var nextCost = Math.floor(100 * Math.
        pow(1.03, tee));
    document.getElementById(
        "teeCost").innerHTML = nextCost;
};

function buyPant() {
    var pantCost = Math.floor(1000 *
    Math.pow (1.007, pant));
    if (chaussure >= pantCost) {
        pant = pant +
            100;
        chaussure = chaussure - pantCost;
        document.getElementById("pant")
            .innerHTML = m += 1;
        document.getElementById("chaussure")
            .innerHTML = chaussure;
    };
    var nextCost = Math.floor(1000 * Math.
        pow(1.007, pant));
    document.getElementById(
        "pantCost").innerHTML = nextCost;
};

function buyCap() {
    var capCost = Math.floor(25000 *
        Math.pow(1.007, caps));
    if (chaussure >= capCost) {
        caps = caps +
            1000;
        chaussure = chaussure - capCost;
        document.getElementById("caps")
            .innerHTML = f += 1;
        document.getElementById("chaussure")
            .innerHTML = chaussure;
    };
    var nextCost = Math.floor(20000 * Math.
        pow(1.0001, caps));
    document.getElementById(
        "capCost").innerHTML = nextCost;
};

function save() {
localStorage.setItem("chaussurecount",chaussure);
localStorage.setItem("skatecount",skates);
localStorage.setItem("teecount",tee);
localStorage.setItem("pantcount",pant);
localStorage.setItem("capcount",caps);
}


window.setInterval(function() {
 cookieClick(skates);
 cookieClick(tee);
 cookieClick(pant);
 cookieClick(factory);
}, 1000, );