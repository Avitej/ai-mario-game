noseX = "";
noseY = "";
GameStatus = "";

function startGame() {
	GameStatus = "start";
	document.getElementById("status").innerHTML = "game is loaded!";
}

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(1240, 336);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded() {
	console.log("model is loaded");
}
function gotPoses(results){
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("nose x is " + noseX + " and noseY is " + noseY);
	}
}

function draw() {
	game()
}






