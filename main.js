function preload(){
}

function setup() {
    canvas = createCanvas(1010,499);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    stroke("#CABADC");
    fill("#CABADC");

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);

    stroke("#5f4b8b");
    fill("#5f4b8b");
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);
}

function take_snapshot(){
    save("shibam maity's app's photo.png");
}