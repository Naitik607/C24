// creating constants
const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 
 // creating variables
 var engine, world; 
 var ground; 
 var bucketPart1,bucketPart2,bucketPart3;
 function setup() { 
   //creating canvas
   createCanvas(1200,700); 
   // engine
  engine = Engine.create();
  // world
   world = engine.world; 
   // ground options
  var object_option = 
  { 
    isStatic: true
    
  } 
  // making objects i.e. ground,paper , bucket
  ground = Bodies.rectangle(400, height, 1500, 20, object_option); 
  

   fill("yellow")
  

  World.add(world, ground);
   
   var paper_options ={ 
    isStatic: false,
    restitution:0.3,
    friction:0.5,
    density:1.2
     }
   
     
   paper = Bodies.circle(50,680,20, paper_options); 
   
   
   World.add(world,paper);

     var bucket_options = {
       isStatic:false
     }
   bucketPart1 = Bodies.rectangle(800,680,200,20,bucket_options);
   

   World.add(world,bucketPart1);

   

   bucketPart2 = Bodies.rectangle(710,630,20,100,bucket_options);
  
   World.add(world,bucketPart2);

   bucketPart3 = Bodies.rectangle(910,630,20,120,bucket_options);
   
   
  
   World.add(world,bucketPart3);
   
   
  }
   function draw() { 
    background(0); 
    // updating Engine
    Engine.update(engine);
    // set all objects on center
     rectMode(CENTER); 
     rect(ground.position.x, ground.position.y,1500,20); 

     rectMode(CENTER);
     rect(bucketPart1.position.x,bucketPart1.position.y,200,20);

     rectMode(CENTER);
     rect(bucketPart2.position.x,bucketPart2.position.y,20,100);

     rectMode(CENTER);
     rect(bucketPart3.position.x,bucketPart3.position.y,20,125);

     ellipseMode(RADIUS);
     fill("pink") 
   ellipse(paper.position.x, paper.position.y, 20, 20);


   //define keyPressed function
   keyPressed();
   // creating objects on screen
     drawSprites();
     
     }

     // function keyPressed
     function keyPressed() {
       //if up arrow pressed paper should jump
       if(keyCode===UP_ARROW){
         Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
       }
     }
