const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,750,480,20);

    for(var k = 0; k <= width; k = k + 80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    }

    for(var j = 40; j <= width; j = j + 40){
      plinkos.push(new Plinko(j,95,10));
    }
    for(var j = 50; j <= width-10; j = j + 50){
      plinkos.push(new Plinko(j,185,10));
    }
    for(var j = 30; j <= width-15; j = j + 45){
      plinkos.push(new Plinko(j,285,10));
    }
    for(var j = 30; j <= width-15; j = j + 45){
      plinkos.push(new Plinko(j,285,10));
    }
    for(var j = 20; j <= width-15; j = j + 55){
      plinkos.push(new Plinko(j,365,10));
    }
    for(var j = 20; j <= width-25; j = j + 55){
      plinkos.push(new Plinko(j,505,10));
    }

    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
    }


}

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();

  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var j = 0; j<particles.length; j++){
    particles[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }


  drawSprites();
}
