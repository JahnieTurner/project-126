music1 = "";
music2 = "";

function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("music1.mp3");
}

function setup() {
    canvas = createCanvas();
    canvas.center();
    canvas = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500)
}