window.addEventListener("load", function () {
    const artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todos1.unshift({
                text: wildcard,
                isChecked: true
            });
            drawListToDOM();
        }
    });
    function startContinousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continous: true,
                listen: true,
                interinResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 150);
    }
    startContinousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map