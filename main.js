music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;
song_holder = '';

function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("music1.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY.results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        scoreLeftWrist = results[0].pose.keypoints[9].score;

    }
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function draw() {
    image(video, 0, 0, 500, 500);
    stroke("FF0000");
    color("FF0000");


    if (scoreLeftWrist > 0.2) {
        circle(0, 0, 200, 200)
        music2.stop()
    }

    if (music1 == false) {
        music1.isPlaying()
        document.getElementById(music1).innerHTML
    }
}