const Engine = Matter.Engine
const  World = Matter.World
const  Bodies = Matter.Bodies;
var gameState="play"
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var chance=0

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 2, divisionHeight));
   }


    for (var j = 60; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 60; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  console.log(mouseX,mouseY)
  //console.log(gameState)
  textSize(20)
  text("Score : "+score,20,30);
  text("500",45-20,510)
  text("400",125-20,510)
  text("300",205-20,510)
  text("200",285-20,510)
  text("100",365-20,510)
  text("100",445-20,510)
  text("200",525-20,510)
  text("300",605-20,510)
  text("400",685-20,510)
  text("500",765-20,510)
  Engine.update(engine);
  if(chance<5){
    gameState="play"
  }
 
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  
   if(chance>4){
     gameState="end"
     textSize(40)
     fill("yellow")
     text ("GameOver",300,300)
   }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   fill("yellow")
   Score()
   rect(400,60,800,5)
   rect(400,485,800,5)
}
function mousePressed(){
  if(gameState==="play"&&mouseY<=75){
  particles.push(new Particle(mouseX,mouseY,10))
  chance=chance+1
  console.log(chance)
}
}
function Score(){
  for(var i=0;i<particles.length;i++){
  if(particles[i].body.position.y>640&&particles[i].body.position.y<651){
if(particles[i].body.position.x>0&&particles[i].body.position.x<85){
   score=score+500
 }
if(particles[i].body.position.x>85&&particles[i].body.position.x<170){
   score=score+400
 }
if(particles[i].body.position.x>170&&particles[i].body.position.x<250){
  score=score+300
}
if(particles[i].body.position.x>250&&particles[i].body.position.x<330){
   score=score+200
 }
if(particles[i].body.position.x>330&&particles[i].body.position.x<405){
   score=score+100
 }
if(particles[i].body.position.x>405&&particles[i].body.position.x<490){
   score=score+100
 }
if(particles[i].body.position.x>490&&particles[i].body.position.x<565){
   score=score+200
 }
if(particles[i].body.position.x>565&&particles[i].body.position.x<650){
   score=score+300
 }
if(particles[i].body.position.x>650&&particles[i].body.position.x<730){
   score=score+400
 }
if(particles[i].body.position.x>730&&particles[i].body.position.x<800){
   score=score+500
 }

  }
}}