//Aufgabe 8 mit Hilfe von Nadine Perisic//

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
//Funktion für das Rekording//
function playSample(sound: string): void {
    if (isRecording): Boolean {;
        givenBeat.push(sound);
    }
    let audios: HTMLAudioElement = new Audio(sound);
    audios.play();
}
//Stopp Button//
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
}//Loop// 
let beatIntervalId: string;
var givenBeat: string[] = ["hihat.mp3", "kick.mp3", "snare.mp3"];
let isRecording = false;
function startBeat: () {
    var counter: number = 0;
beatIntervalId = setInterval(function () {
    playSample(givenBeat[counter]);
    counter += 1;
    if (counter >= givenBeat.length) {
        counter = 0;
    }
},                           500);
}
//Bei Stopp wird Intervall gelöscht//
function stopBeat(): void {
    clearInterval(beatIntervalId);
}
function deleteBeat(): void {
    givenBeat = [];
}
//Funktion Aufnahme//
function createBeat() {
    if (isRecording == false) {
        isRecording = true;
        document.getElementById("#micbutton");
    }
    else {
        isRecording = false;
    }
}
function isRec(): void {
    var play: = document.querySelector("#recbutton");
    if (play.getAttribute("id") == "micbutton") {
        play.setAttribute("id", "recbutton");
        createBeat();
    }
    else {
        play.setAttribute("id", "micbutton");
        stopBeat();
    }
}