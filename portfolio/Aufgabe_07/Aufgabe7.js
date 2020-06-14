var allsamples = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh-1.mp3", "laugh-2.mp3", "snare.mp3"];
function playSample(mp3) {
    var allSounds = new Audio(mp3);
    allSounds.play();
}
window.addEventListener('load', function () {
    document.querySelector("#button1").addEventListener("click", function () {
        playSample("A.mp3");
    });
    document.querySelector("#button2").addEventListener("click", function () {
        playSample("C.mp3");
    });
    document.querySelector("#button3").addEventListener("click", function () {
        playSample("F.mp3");
    });
    document.querySelector("#button4").addEventListener("click", function () {
        playSample("G.mp3");
    });
    document.querySelector("#button5").addEventListener("click", function () {
        playSample("hihat.mp3");
    });
    document.querySelector("#button6").addEventListener("click", function () {
        playSample("kick.mp3");
    });
    document.querySelector("#button7").addEventListener("click", function () {
        playSample("laugh-1.mp3");
    });
    document.querySelector("#button8").addEventListener("click", function () {
        playSample("laugh-2.mp3");
    });
    document.querySelector("#button9").addEventListener("click", function () {
        playSample("snare.mp3");
    });
});
//Teil2//
window.addEventListener("load", function () {
    function drumpadbeat() {
        setInterval(function () {
            playSample("hihat.mp3");
            playSample("kick.mp3");
            playSample("snare.mp3");
        }, 500);
        document.querySelector("#playbutton").addEventListener("click", drumpadbeat);
    }
});
//# sourceMappingURL=Aufgabe7.js.map