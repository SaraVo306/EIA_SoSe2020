/*
// Aufgabe 9 mit Tipps von Herr Rausch
// Array aufstellen
var todos: string[] = ["Einkaufen gehen", "Kuchen backen", "Spazieren gehen", "Für die Uni lernen"];
window.addEventListener("load", function () {
   // Array Elemente werden ausgegeben und der Papierkorb wird angezeigt
   function drawList(): void {
       zweiteliste.innerHTML = "";
       for (var index = 0; index < todos.length; index++) {
           zweiteliste.innerHTML += "<div>" + "<input type='checkbox'>" + todos[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
       }
       // "Insgesamt" Anzeige passt sich an
       var total: string = document.querySelector("#Span");
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


       //Löschen, funktioniert erst sobald ein To-Do hinzugefügt wurde//
       var closethetodo = document.getElementsByClassName("fas fa-trash-alt");
       var i;
       for (i = 0; i < closethetodo.length; i++) {
           closethetodo[i].onclick = function () {
               var div = this.parentElement;
               div.style.display = "none";
               count--;
               document.getElementById("#Span").innerHTML = String(count);
           };
       }
   });
   */ 
//# sourceMappingURL=Aufgabe9.js.map