class Tile {
	constructor(x,y,side,index,next){
		this.x = x;
		this.y = y;
		this.side = side;
		this.next = next;
		this.index=index;
		this.color = rgb(Math.round(random(150,255)), Math.round(random(120,255)), Math.round(random(200,255)));
	}

	show(){
		push();
		fill(this.color);
		rect(this.x, this.y, this.side, this.side);
		pop();
	}

	showText(){
		push();
		fill("black");
		//stroke("black");
		text(this.index+1, this.x+5, this.y+15);
		pop();
	}

}