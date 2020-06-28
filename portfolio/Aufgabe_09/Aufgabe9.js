// Aufgabe 9 mit Tipps von Herr Rausch
// Array aufstellen
var todos = ["Einkaufen gehen", "Kuchen backen", "Spazieren gehen", "Für die Uni lernen"];
window.addEventListener("load", function () {
    // Array Elemente werden ausgegeben und der Papierkorb wird angezeigt
    function drawList() {
        zweiteliste.innerHTML = "";
        for (var index = 0; index < todos.length; index++) {
            zweiteliste.innerHTML += "<div>" + "<input type='checkbox'>" + todos[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        // "Insgesamt" Anzeige passt sich an
        var total = document.querySelector("#Span");
        total.innerHTML = todos.length;
    }
    var zweiteliste = document.querySelector(".addtolist");
    drawList();
    // Mit klick auf add ToDo wird ein neues Element hinzugefügt
    var input = document.querySelector("#newAdd");
    console.log(input);
    var addNewElement = document.querySelector("#button");
    addNewElement.addEventListener("click", function () {
        todos.push(input.value);
        drawList();
        input.value = "";
        console.log(todos);
    });
    //Ansatz delete Funktion//
    // vielleicht Array Elemente löschen mit todos.push(), aber wie?//
});
//# sourceMappingURL=Aufgabe9.js.map