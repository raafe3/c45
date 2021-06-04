const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder1
var thunder2
var thunder3
var thunder4
var thunderCreatedframe=0
var thunder
var maxDrops=100
var drops=[]
var rand
function preload(){
  thunder1=loadImage("images/thunderbolt/1.png")
  thunder2=loadImage("images/thunderbolt/2.png")
  thunder3=loadImage("images/thunderbolt/3.png")
  thunder4=loadImage("images/thunderbolt/4.png")
}

function setup(){
   engine=Engine.create()
   world=engine.world
    createCanvas(400,700)
    umbrela=new Umbrela(200,500)
if(frameCount%150===0){
  for(var i=0; i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)))
  }
}
}

function draw(){
    Engine.update(engine)
    background(0)
    rand = Math.round(random(1,4))
    if(frameCount%80===0){
      thunderCreatedframe=frameCount
      thunder=createSprite(random(10,370),random(10,30),10,10)
      switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default:break;

      }
    }
    if(thunderCreatedframe+10===frameCount && thunder){
thunder.destroy()
    }

    umbrela.display()
    for(var i=0; i<maxDrops;i++){
      drops[i].display()
      drops[i].updateY()

    }
}   

