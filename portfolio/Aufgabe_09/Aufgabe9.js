// Aufgabe 9 mit Tipps von Herr Rausch
// Array aufstellen
var mytodoList = ["Einkaufen gehen", "Kuchen backen", "Spazieren gehen", "Für die Uni lernen"];
window.addEventListener("load", function () {
    // Array Elemente werden ausgegeben und der Papierkorb wird angezeigt
    function drawList() {
        zweiteliste.innerHTML = "";
        for (var index = 0; index < mytodoList.length; index++) {
            zweiteliste.innerHTML += "<div>" + "<input type='checkbox'>" + mytodoList[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        // "Insgesamt" Anzeige passt sich an
        var total = document.querySelector("#Span");
        total.innerHTML = mytodoList.length;
    }
    var zweiteliste = document.querySelector(".addtolist");
    drawList();
    // Mit klick auf add ToDo wird ein neues Element hinzugefügt
    var input = document.querySelector("#newAdd");
    console.log(input);
    var addNewElement = document.querySelector("#button");
    addNewElement.addEventListener("click", function () {
        mytodoList.push(input.value);
        drawList();
        input.value = "";
        console.log(mytodoList);
    });
});
//# sourceMappingURL=Aufgabe9.js.map