var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;

var engine;

var leftArm;
var rightArm;
var ground;
var circles = [];

function setup() {
  createCanvas(800, 600);

  // create an engine
  engine = Engine.create();

  leftArm = new Boundary(width-500, 200, 200, 30, 0.4);
  rightArm = new Boundary(500, 350, 200, 30, -0.4);
  ground = new Boundary(400, 610, 810, 60, 0.0);

  // add all of the bodies to the world
  World.add(engine.world, [ground.body, leftArm.body, rightArm.body]);

  // run the engine
  Matter.Runner.run(engine);
}

// Using p5 to render
function draw() {

  background(0);
  //Engine.update(engine);
  //circles.push(new Circle(width/2, 100, 10));
  leftArm.show();
  rightArm.show();
  ground.show();

  for(let i=0; i<circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      World.remove(engine.world, circles[i].body);
      circles.splice(i, 1);
      i--;
    }
  }
  //console.log(circles.length, engine.world.bodies.length);
}

function mouseDragged(){
  var circle = new Circle(mouseX, mouseY, 10);
  circles.push(circle);
  World.add(engine.world, circle.body);
}