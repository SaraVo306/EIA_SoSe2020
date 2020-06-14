window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', EuropaFunktion);
    function EuropaFunktion() {
        document.getElementById("em1").innerHTML = "4209.3";
        document.getElementById("titleRegion").innerHTML = "Europe";
        document.getElementById("em2").innerHTML = "14.5%";
        document.getElementById("em3").innerHTML = "-0.15%";
        document.getElementById("em4").innerHTML = "-756.45";
        document.getElementById("text").innerHTML = "Europe";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 14.5%");
    }
    document.querySelector(".northamerica").addEventListener('click', NordAmerikaFunktion);
    function NordAmerikaFunktion() {
        document.getElementById("em1").innerHTML = "6035.6";
        document.getElementById("titleRegion").innerHTML = "North America";
        document.getElementById("em2").innerHTML = "20.8%";
        document.getElementById("em3").innerHTML = "0.09%";
        document.getElementById("em4").innerHTML = "-564.8";
        document.getElementById("text").innerHTML = "North America";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 20.8%");
    }
    document.querySelector(".southamerica").addEventListener('click', SüdamerikaFunktion);
    function SüdamerikaFunktion() {
        document.getElementById("em1").innerHTML = "1261.5";
        document.getElementById("titleRegion").innerHTML = "South America";
        document.getElementById("em2").innerHTML = "4.35%";
        document.getElementById("em3").innerHTML = "0.11%";
        document.getElementById("em4").innerHTML = "128.9";
        document.getElementById("text").innerHTML = "South America";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4.35%");
    }
    document.querySelector(".africa").addEventListener('click', AfrikaFunktion);
    function AfrikaFunktion() {
        document.getElementById("em1").innerHTML = "1235.5";
        document.getElementById("titleRegion").innerHTML = "Africa";
        document.getElementById("em2").innerHTML = "4.26%";
        document.getElementById("em3").innerHTML = "0.2%";
        document.getElementById("em4").innerHTML = "207.5";
        document.getElementById("text").innerHTML = "Africa";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4.26%");
    }
    document.querySelector(".asia").addEventListener('click', AsienFunktion);
    function AsienFunktion() {
        document.getElementById("em1").innerHTML = "16274.1";
        document.getElementById("titleRegion").innerHTML = "Asia";
        document.getElementById("em2").innerHTML = "50.09%";
        document.getElementById("em3").innerHTML = "0.26%";
        document.getElementById("em4").innerHTML = "3319.4";
        document.getElementById("text").innerHTML = "Asia";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 50.09%");
    }
    document.querySelector(".australia").addEventListener('click', AustralienFunktion);
    function AustralienFunktion() {
        document.getElementById("em1").innerHTML = "2100.5";
        document.getElementById("titleRegion").innerHTML = "Australia";
        document.getElementById("em2").innerHTML = "6.75%";
        document.getElementById("em3").innerHTML = "5.39%";
        document.getElementById("em4").innerHTML = "107.5";
        document.getElementById("text").innerHTML = "Australia";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 6.75%");
    }
});
//# sourceMappingURL=Aufgabe6.js.map