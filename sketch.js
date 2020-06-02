//[lbl] start:
var panda;
var bamboos=[];
var backgroundImg;
var parallx = 0.8;
var backgroundx;
var pandaImg;
var bambooBodyImg;
var bambooPeakImg;
var score=0;
var gameoverFrame = 0;
var maxScore = 0;

function preload() {
  bambooBodyImg = loadImage('picture/stem1.png');
  bambooPeakImg = loadImage('picture/stem1.png');
  pandaImg = loadImage('picture/p4.png');
  backgroundImg = loadImage('picture/bg6.jpg');
}

function setup()
{
	createCanvas(1200,530);
	panda= new Panda();
	bamboos.push(new Bamboo());

	button=createButton("Display Mode");
	button.position(1050,10);
	button.mousePressed(changeTheme);
}

function changeBG()
{
 // [lbl] repeat: goto start;
}

function changeTheme()
{
	var x= int(random(3,7));
	var src= "picture/bg"+x+".jpg";
	backgroundImg=loadImage(src);
}
function draw()
{
	background(0);
   

  // Draw our background image, then move it at the same speed as the bamboos
  image(backgroundImg,0, 0, width, height);
// image(backgroundImg,0,0,);
  backgroundx -= bamboos[0].speed * parallx;

  // this handles the "infinite loop" by checking if the right
  // edge of the image would be on the screen, if it is draw a
  // second copy of the image right next to it
  // once the second image gets to the 0 point, we can reset bgX to
  // 0 and go back to drawing just one image.
  if (backgroundx <= -backgroundImg.width + width) {
    image(backgroundImg, backgroundx + backgroundImg.width, 0, backgroundImg.width, height);
    if (backgroundx <= -backgroundImg.width) {
      backgroundx = 0;
    }
  }



   for(var i=bamboos.length-1;i>=0;i--)
	{

		bamboos[i].update();
		bamboos[i].show();
		


		if (bamboos[i].pass(panda)) {
          score++;
         }

		if(bamboos[i].hits(panda))
		{
			gameover();
		}
		if(bamboos[i].offscreen())
		{
			bamboos.splice(i,1);
		}
	}

	//after the bamboo the panda appears

	panda.update();
	panda.show();

	//for adding more bamboos
	if((frameCount ) %80==0)
	{
		bamboos.push(new Bamboo());
	}
  
    displayScores();
	
}

function displayScores() {
  textSize(30);
  textStyle(BOLD)
  text('Your Score: ' + score,1, 32);
  text('Can you Beat : ' + maxScore, 1, 64);
}


function gameover() {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textStyle(BOLDITALIC);
  text('PANDA WOKE UP , EATING TIME', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
  button = createButton('PLAY AGAIN');
  button.position(400, 19);
  button.mousePressed(changeBG);
}

function reset() {
  isOver = false;
  score = 0;
  bgX = 0;
  bamboos = [];
  panda = new Panda();
  bamboos.push(new Bamboo());
  gameoverFrame = frameCount - 1;
  loop();
}

function keyPressed()
{
	if(key==' ')
	{
		panda.up();
		//for checking if my space works
		//console.log("SPace");
	}
}