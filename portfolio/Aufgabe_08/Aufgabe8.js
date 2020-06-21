// Teile von Aufgabe 8 it Hilfe von Sade Babatunde//
window.addEventListener("load", function () {
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
    document.querySelector("#playbutton").addEventListener("click", stop);
    document.querySelector("#deletebutton").addEventListener("click", deleteBeat);
    document.querySelector("#micbutton").addEventListener("click", createBeat);
});
//Recording Funktion
function playSample(sound) {
    if (isRecording) {
        givenBeat.push(sound);
    }
    let audios = new Audio(sound);
    audios.play();
}
// Defieneren der Start-Stop Funktion// 
function stop() {
    var play = document.querySelector("#playbutton");
    if (play.getAttribute("class") == "fas fa-play") {
        play.setAttribute("class", "fas fa-stop");
        startBeat();
    }
    else {
        play.setAttribute("class", "fas fa-play");
        stopBeat();
    }
}
// Defieneren des Anfangsinterval (nachdem er gelöscht wurde kommt er nicht wieder)// 
let beatIntervalId;
var givenBeat = ["hihat.mp3", "kick.mp3", "snare.mp3"];
let isRecording = false;
var counter = 0;
beatIntervalId = setInterval(function () {
    playSample(givenBeat[counter]);
    counter += 1;
    if (counter >= givenBeat.length) {
        counter = 0;
    }
}, 500);
// Wenn Stop dann wird Interval gelöscht
function stopBeat() {
    clearInterval(beatIntervalId);
}
function deleteBeat() {
    givenBeat = [];
}
// Aufnahme Funktion (was für ein Käse)//
function createBeat() {
    if (isRecording == false) {
        isRecording = true;
        document.getElementById("#micbutton");
    }
    else {
        isRecording = false;
    }
}
function isRec() {
    var play = document.querySelector("#recbutton");
    if (play.getAttribute("id") == "micbutton") {
        play.setAttribute("id", "recbutton");
        createBeat();
    }
    else {
        play.setAttribute("id", "micbutton");
        stopBeat();
    }
}
//# sourceMappingURL=Aufgabe8.js.map