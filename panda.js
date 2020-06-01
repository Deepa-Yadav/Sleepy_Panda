//function for panda position 
//constructor
function Panda()
{
  this.y=width;
  this.x=25;

  this.icon = pandaImg;
  this.width = 40;
  this.height = 40;

  this.show=function()
  {
  	// draw the icon CENTERED around the X and Y coords of the panda object
    image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }
  
 
 //without doing anything , the panda falls down so

  this.gravity=0.1;//it is the force
  this.velocity=0;//the above force changes the panda velocity
  this.lift=-4;
  //this is for moving the panda up whenever the space is pressed
  this.up =function(){
  	this.velocity = this.lift;
  }

//for panda movement
  this.update=function(){
  this.velocity+=this.gravity;
  
  /*NOTE*/
  // this if for limiting the top speed
  this.veloctiy+=0.2 ;

  this.y+=this.velocity;

   //now we gotta do something that panda stops
   //panda should stop if it comes to down completly
  if(this.y >=height - this.height/2)
  {
  	this.y=height-this.height/2;
  	this.velocity=0;
  }
  //similiar for the top of the screen
  if(this.y<=this.height/2)
  {
  	this.y=this.height/2;
  	this.velocity=0;
  }
  }

 




 
}