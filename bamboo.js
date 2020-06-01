function Bamboo()
{
	//bamboo will be from the top to the middle of the screen
	this.spacing = 150;
	this.top=random(height / 6, 3 / 4 * height);

	this.bottom = this.top + this.spacing;
	this.x=width;

	this.w=50;
	this.speed=1.8;//for adjusting the speed of bamboo

	this.highlight=false;
	this.passed=false;

	this.hits=function(){
	 let halfPandaHeight = panda.height / 2;
    let halfPandawidth = panda.width / 2;
    if (panda.y - halfPandaHeight < this.top || panda.y + halfPandaHeight > this.bottom) {
      //if this.w is huge, then we need different collision model
      if (panda.x + halfPandawidth > this.x && panda.x - halfPandawidth < this.x + this.w) {
        this.highlight = true;
        this.passed = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
	}


	//this function is used to calculate scores and checks if we've went through the bamboos
	this.pass=function()
	{
		if (panda.x > this.x && !this.passed) 
		{
      this.passed = true;
      return true;
    }
       return false;
	}


	//for drawhalf 
	this.drawHalf=function()
	{
	let howManyNedeed = 0;
    let peakRatio = bambooPeakImg.height / bambooPeakImg.width;
    let bodyRatio = bambooBodyImg.height / bambooBodyImg.width;
    //this way we calculate, how many tubes we can fit without stretching
    howManyNedeed = Math.round(height / (this.w * bodyRatio));
    //this <= and start from 1 is just my HACK xD But it's working
    for (let i = 0; i < howManyNedeed; ++i) {
      let offset = this.w * (i * bodyRatio + peakRatio);
      image(bambooBodyImg, -this.w / 2, offset, this.w, this.w * bodyRatio);
    }
    image(bambooPeakImg, -this.w / 2, 0, this.w, this.w * peakRatio);
  
	}




	this.show = function()
	{
	push();
    translate(this.x + this.w / 2, this.bottom);
    this.drawHalf();
    translate(0, -this.spacing);
    rotate(PI);
    this.drawHalf();
    pop();

	}

	this.update=function()
	{
		//all are moving to the left
		this.x-= this.speed;
	}

	this.offscreen = function()
	{
		if(this.x< -this.w)
			return true;
		else
			return false;
	}
}