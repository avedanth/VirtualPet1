var dog, happyDog, database, foodS, foodStock;

function preload()
{
 dogImage = loadImage("images/dogImg.png");
 dogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,100);
  dog.scale = 0.2;
  dog.addImage(dogImage)
foodStock = database.ref('Food');
foodStock.on("value", readStock)  
  
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage2);
}
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();

}
function writeStock(x){
  if(x<= 0){
 x = 0;
  }
  else{
    x = x-1;

  }
  database.ref('/').update(
    {Food:x})
}

