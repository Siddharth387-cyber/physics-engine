const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine1,world1,ball,ground,ball2;



function setup() {
  createCanvas(800,400);
  engine1=Engine.create();
  world1=engine1.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,400,800,20,ground_options);
  World.add(world1,ground);
  var ball_options={
    restitution:0.8
  }
  ball=Bodies.circle(400,100,20,ball_options);
  World.add(world1,ball);
  var ball2_options={
    restitution:1.2
  }
  ball2=Bodies.circle(200,100,30,ball2_options);
  World.add(world1,ball2)
  


}

function draw() {
  background(255,255,255);  
  Engine.update(engine1);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
circle(ball.position.x,ball.position.y,20);
  circle(ball2.position.x,ball2.position.y,30);
  drawSprites();
}