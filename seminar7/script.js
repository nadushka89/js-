"use strict";

let playerEl = document.querySelector(".player");
let playPanel = document.createElement("video");
playPanel.src = "assets/video.mp4";
playPanel.classList.add("videoBox");
let btnPanel = document.createElement("div");
btnPanel.classList.add("btnPan");
let btnPlayEl = document.createElement("div");
btnPlayEl.classList.add("btnPlay");
let btnPauseEl = document.createElement("div");
btnPauseEl.classList.add("btnPause");

btnPlayEl.addEventListener("click", () => {
    playPanel.play();
});
btnPauseEl.addEventListener("click", () => {
    playPanel.pause();
});



let progressbar = document.createElement("progress");

playPanel.addEventListener("loadedmetadata", () => {
    progressbar.max = playPanel.duration;
});

playPanel.addEventListener("timeupdate", () => {
    progressbar.value = playPanel.currentTime;
    currentTimeField.textContent = formatTime(playPanel.currentTime);
});

playPanel.addEventListener("progress", () => {
    let loaded = 0;
    if (playPanel.buffered.length > 0) {
        loaded = (playPanel.buffered.end(0) / playPanel.duration) * 100;
    }
    progressbar.setAttribute("value", loaded);
});

let currentTimeField = document.createElement("div");
currentTimeField.classList.add("currentTimeField");

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


let volumeInput = document.createElement("input");
volumeInput.type = "range";
volumeInput.min = 0;
volumeInput.max = 10;
volumeInput.value = 5;

playPanel.volume = 0.5;
volumeInput.addEventListener("change", (e) => {
    playPanel.volume = e.target.value / 10;
});

btnPanel.appendChild(btnPlayEl);
btnPanel.appendChild(btnPauseEl);
btnPanel.appendChild(progressbar);
btnPanel.appendChild(currentTimeField);
btnPanel.appendChild(volumeInput);


playerEl.appendChild(playPanel);
playerEl.appendChild(btnPanel);
