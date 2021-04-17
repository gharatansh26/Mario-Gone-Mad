
var countDistanceX=0
function preload()
{}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //platform1=new Platform(100);
  //platform2=new Platform(500);

  var gap=random(30,40,80);

  for (var i=0;i<26;i++){
    platform=new Platform(countDistanceX);
    countDistanceX=countDistanceX+platform.rw+gap
    
  }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

