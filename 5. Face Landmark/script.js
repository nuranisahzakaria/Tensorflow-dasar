let video = document.getElementById("video");
let canvas = document.body.appendChild(document.createElement("canvas"));
let ctx = canvas.getContext("2d");

ctx.canvas.width = 600;
ctx.canvas.height = 400;

const startStream = () => {
    navigator.mediaDevices.getUserMedia ({
        video : {width:600, height:400},
        audio : false
    }).then((stream) => {
        video.srcObject = stream;
    });
}

startStream()