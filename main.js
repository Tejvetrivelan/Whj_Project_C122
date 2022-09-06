function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide()
}
function draw()
{
    fill(45, 206, 158);
    stroke(35, 141, 109)
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(100, 149, 237)
    stroke(106,162,216)
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
    image(video, 230, 130, 230, 150)
}

function take_snapshot()
{
    save("Tej21.png")
}
