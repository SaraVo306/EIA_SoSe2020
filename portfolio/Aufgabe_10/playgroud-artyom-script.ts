declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);

            todos1.unshift({
                text: wildcard,
                isChecked: true
            });
            drawListToDOM();
        }
    });
    function startContinousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continous: true,
                    listen: true,
                    interinResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            }, 
            150);
    }

    startContinousArtyom();

});