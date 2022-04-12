function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(1000, 250);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(300, 250);
    poseNetModel = ml5.poseNet(video, modelLoaded);
    poseNetModel.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Model is completely initialized.")
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
}
}